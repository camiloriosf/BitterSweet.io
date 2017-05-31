import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import About from '../components/About';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="About - BitterSweet.io">
    <About />
  </MainLayout>
));
