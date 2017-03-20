import React from 'react';

export default class NoSSR extends React.Component {
  state = { render: false };

  componentDidMount() {
    this.setState({ render: true });
  }

  render() {
    if (!this.state.render) return null;
    return React.Children.only(this.props.children);
  }
}
