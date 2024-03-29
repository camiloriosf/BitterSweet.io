import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

export default ({ children, title, pathname }) =>
    (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.4.0/grommet.min.css" rel="stylesheet" type="text/css" />
          <link href="/static/theme.css" rel="stylesheet" type="text/css" />
          <script src="/static/zendesk.js" type="text/javascript" />
          <script src="/static/google.js" type="text/javascript" />
        </Head>
        <App centered={false}>
          <Header fixed float={pathname === '/'} justify="between" pad={{ horizontal: 'medium' }} style={pathname === '/' ? { backgroundColor: 'transparent' } : { backgroundColor: '#434343' }} >
            <Link prefetch href="/">
              <Anchor style={{ textDecoration: 'none', color: '#fff' }}>
                <Title>
                  BitterSweet
                </Title>
              </Anchor>
            </Link>
            <Box flex justify="end" direction="row" responsive wrap>
              <Link prefetch href="/quote"><Anchor label="QUOTE" style={pathname === '/quote' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
              <Link prefetch href="/services"><Anchor label="SERVICES" style={pathname === '/services' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
              <Link prefetch href="/how"><Anchor label="HOW" style={pathname === '/how' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
              <Link prefetch href="/contact"><Anchor label="CONTACT" style={pathname === '/contact' ? { color: '#fff', textDecoration: 'underline' } : { color: '#fff', textDecoration: 'none' }} /></Link>
            </Box>
          </Header>
          {children}
        </App>
      </div>
  );
