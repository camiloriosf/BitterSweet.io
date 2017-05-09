import React from 'react';
import Head from 'next/head';
import App from 'grommet/components/App';

export default ({ children, title = 'E-SaaS' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.4.0/grommet.min.css" rel="stylesheet" type="text/css" />
    </Head>

    <App>
      {children}
    </App>
  </div>
);
