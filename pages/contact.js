import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import Contact from '../components/Contact';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="Contact - BitterSweet.io">
    <Contact />
  </MainLayout>
));
