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
    delivery: state.quote.delivery,
  };
}

export default connect(mapStateToProps, actions)(
  ({ delivery, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Delivery Time
            </Heading>
            <FormField>
              <RadioButton id="opt1" label="Normal" checked={delivery === 'opt1'} onChange={event => updateQuote({ values: { delivery: event.target.id } })} />
              <RadioButton id="opt2" label="Start Immediately" checked={delivery === 'opt2'} onChange={event => updateQuote({ values: { delivery: event.target.id } })} />
              <RadioButton id="opt3" label="Start Immediately with Deliverable in 3 months or less" checked={delivery === 'opt3'} onChange={event => updateQuote({ values: { delivery: event.target.id } })} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);

