import React from 'react';
import { connect } from 'react-redux';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Meter from 'grommet/components/Meter';
import Heading from 'grommet/components/Heading';
import VisibilitySensor from 'react-visibility-sensor';
import * as actions from '../lib/actions/index';

export default connect(null, actions)(
  props => (
    <Section justify="center" full="vertical" align="center" pad="small" colorIndex="light-2" >
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            props.changeHeader({ header: 1, quote: 'underline' });
          } else { props.changeHeader({ quote: 'none' }); }
        }}
      />
      <Box align="center">
        <Value value={0} units="%" align="start" size="medium" />
        <Meter value={0} colorIndex="neutral-2" size="medium" />
      </Box>
      <Heading uppercase >
        Tell us about your app
      </Heading>
    </Section>
  ),
);
