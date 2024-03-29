import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import How from '../components/How';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="About - BitterSweet.io">
    <How />
  </MainLayout>
));
