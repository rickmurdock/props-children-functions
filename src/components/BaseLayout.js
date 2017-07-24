import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {

  render() {
    return (
      // <div>This should house Header and Footer components and be able to house any children components.</div>
      <div>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}