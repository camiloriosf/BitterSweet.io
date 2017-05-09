import React, { Component } from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import MainC from '../components/Main';

class Main extends Component {
  static getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const isServer = !!req;
    return { isServer, userAgent };
  }

  render() {
    return (
      <MainLayout pathname={this.props.url.pathname} title="DevC">
        <MainC />
      </MainLayout>
    );
  }
}

export default withData(Main);
