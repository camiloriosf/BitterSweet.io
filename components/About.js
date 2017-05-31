import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export default () => (
  <Section justify="start" full="vertical" align="center" pad="small" colorIndex="light-2" margin={{ top: 'large' }} >
    <Box align="center" margin={{ top: 'medium' }}>
      <Heading uppercase strong >
          About
      </Heading>
    </Box>
  </Section>
  );
