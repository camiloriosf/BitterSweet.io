import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

function mapStateToProps(state) {
  return {
    geolocation: state.quote.geolocation,
  };
}

export default connect(mapStateToProps, actions)(
  ({ geolocation, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Geolocation
            </Heading>
            <FormField>
              <RadioButton id="opt1" label="None" checked={geolocation === 'opt1'} onChange={event => updateQuote({ values: { geolocation: event.target.id } })} />
              <RadioButton id="opt2" label="Simple" checked={geolocation === 'opt2'} onChange={event => updateQuote({ values: { geolocation: event.target.id } })} />
              <RadioButton id="opt3" label="Location Queries, Geo Fencing, etc." checked={geolocation === 'opt3'} onChange={event => updateQuote({ values: { geolocation: event.target.id } })} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);
