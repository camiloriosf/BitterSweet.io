import React from 'react';
import Link from 'next/link';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

export default () => (
  <Section full="vertical" justify="center" align="start" pad="large" colorIndex="light-2" >
    <Box textAlign="left" >
      <Heading uppercase strong >
        A UNIQUE APPROACH TO SOFTWARE DEV
      </Heading>
    </Box>
    <Link prefetch href="/quote"><Button label="GET AN INSTANT QUOTE" primary /></Link>
  </Section>
  );
