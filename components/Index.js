import React from 'react';
import Link from 'next/link';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

export default () => (
  <Section texture="/static/ncx.jpg" full="vertical" justify="center" align="start" pad="large" colorIndex="dark" >
    <Box textAlign="left" >
      <Heading uppercase strong >
        A UNIQUE APPROACH TO SOFTWARE DEV
      </Heading>
    </Box>
    <Link prefetch href="/quote"><Button label="GET AN INSTANT QUOTE" style={{ backgroundColor: '#dc2878', borderColor: '#dc2878' }} /></Link>
  </Section>
  );
