import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import Quote from '../components/Quote';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="Quote - BitterSweet.io">
    <Quote />
  </MainLayout>
));
