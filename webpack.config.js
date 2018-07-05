const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssBlocks = require('@css-blocks/jsx');
const { CssBlocksPlugin, CssAssets } = require('@css-blocks/webpack');
const webpackSources = require('webpack-sources');
const autoprefixer = require('autoprefixer');
const CleanCSS = require('clean-css');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const jsxCompilationOptions = {
  compilationOptions: {},
  types: 'typescript',
  optimization: {
    rewriteIdents: true,
    mergeDeclarations: true,
    removeUnusedStyles: true,
    conflictResolution: true,
    enabled: true,
  },
  aliases: {},
};

const CssBlockRewriter = new CssBlocks.Rewriter(jsxCompilationOptions);
const CssBlockAnalyzer = new CssBlocks.Analyzer(
  './src/index.js',
  jsxCompilationOptions
);

const cssMinifier = new CleanCSS({
  returnPromise: true,
  level: 1,
  sourceMap: true,
  sourceMapInlineSources: false,
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'site.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                require('@css-blocks/jsx/dist/src/transformer/babel').makePlugin(
                  { rewriter: CssBlockRewriter }
                ),
              ],
            },
          },
          {
            loader: require.resolve('@css-blocks/webpack/dist/src/loader'),
            options: {
              analyzer: CssBlockAnalyzer,
              rewriter: CssBlockRewriter,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CssBlocksPlugin({
      analyzer: CssBlockAnalyzer,
      outputCssFile: 'blocks.css',
      name: 'css-blocks',
      compilationOptions: jsxCompilationOptions.compilationOptions,
      optimization: jsxCompilationOptions.optimization,
    }),
    new CssAssets({
      cssFiles: {
        'base.css': 'assets/base.css',
      },
      concat: {
        'css-blocks.css': {
          sources: ['base.css', 'blocks.css'],
          postProcess: {
            postcss: [
              autoprefixer({ browsers: require('./package.json').browserlist }),
            ],
            processor: isProduction
              ? async (asset, assetPath) => {
                  const source = asset.source();
                  const map = asset.map();
                  const result = await cssMinifier.minify(source);
                  return new webpackSources.SourceMapSource(
                    result.styles,
                    assetPath,
                    result.sourceMap.toJSON(),
                    source,
                    map
                  );
                }
              : asset => asset,
          },
        },
      },
    }),
    new CopyWebpackPlugin([{ from: '**/*', context: 'public' }]),
    ...(isProduction
      ? [
          new UglifyJsPlugin(),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
        ]
      : [
          new webpack.NamedModulesPlugin(),
          new webpack.NamedChunksPlugin(),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
          }),
        ]),
  ],
};
