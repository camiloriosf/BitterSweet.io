import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

export default props => (
  <div>
    <Head>
      <title>{props.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.4.0/grommet.min.css" rel="stylesheet" type="text/css" />
    </Head>
    <App centered={false}>
      <Header fixed float justify="between" pad={{ horizontal: 'medium' }} style={props.pathname === '/' ? { backgroundColor: 'transparent' } : { backgroundColor: '#434343' }} >
        <Link prefetch href="/">
          <Anchor onClick={() => props.changeSection({ section: 0 })} style={{ textDecoration: 'none', color: '#fff' }}>
            <Title>
              Company Name
            </Title>
          </Anchor>
        </Link>
        <Box flex justify="end" direction="row" responsive wrap>
          <Link prefetch href="/quote"><Anchor label="QUOTE" style={props.pathname === '/quote' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
          <Link prefetch href="/services"><Anchor label="SERVICES" style={props.pathname === '/services' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
          <Link prefetch href="/about"><Anchor label="ABOUT" style={props.pathname === '/about' ? { marginRight: 30, color: '#fff', textDecoration: 'underline' } : { marginRight: 30, color: '#fff', textDecoration: 'none' }} /></Link>
          <Link prefetch href="/contact"><Anchor label="CONTACT" style={props.pathname === '/contact' ? { color: '#fff', textDecoration: 'underline' } : { color: '#fff', textDecoration: 'none' }} /></Link>
        </Box>
      </Header>
      {props.children}
    </App>
  </div>
  );
