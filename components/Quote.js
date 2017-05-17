import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';

export default () => (
  <Section justify="center" full="vertical" align="center" pad="small" colorIndex="light-2" >
    <Box align="center">
      <Value value={0} units="%" align="start" size="medium" />
      <Meter value={0} colorIndex="neutral-2" size="medium" />
    </Box>
    <Heading uppercase >
      Tell us about your app
    </Heading>
  </Section>
  );
