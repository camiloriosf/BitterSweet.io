import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import Services from '../components/Services';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="Welcome To ...">
    <Services />
  </MainLayout>
));
