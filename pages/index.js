import React from 'react';
import withData from '../lib/withData';
import MainLayout from '../components/MainLayout';
import Index from '../components/Index';

export default withData(props => (
  <MainLayout pathname={props.url.pathname} title="Welcome To ...">
    <Index />
  </MainLayout>
));
