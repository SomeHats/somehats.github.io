import { media, textColor, primary } from './lib/styles';

const css = String.raw;

export default () =>
  css`
    html {
      font-size: 20px;
    }

    body {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 100%;
      line-height: 1.7;
      background: ${primary};
      color: ${textColor};
    }

    html,
    body,
    #root {
      width: 100%;
      min-height: 100%;
      margin: 0;
      padding: 0;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    .page-transition {
      position: relative;
      display: block;
    }

    .page-enter {
      opacity: 0;
      width: 100%;
      transform: scale(0.9);
      transform-origin: center 20vh;
    }

    .page-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: all 250ms 100ms ease-out;
    }

    .page-leave {
      opacity: 1;
      width: 100%;
      transform: scale(1);
      position: absolute;
      top: 0;
      transform-origin: center 20vh;
    }

    .page-leave-active {
      opacity: 0;
      transform: scale(1.1);
      transition: all 250ms ease-in;
    }

    ${media.medium} {
      html {
        font-size: 18px;
      }
    }

    ${media.smallMedium} {
      html {
        font-size: 16px;
      }
    }

    ${media.print} {
      html {
        font-size: 12px;
      }
    }
  `
    .replace(/\n/g, ' ')
    .replace(/\s\s/g, ' ');
