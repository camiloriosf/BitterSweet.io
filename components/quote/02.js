import React from 'react';
import Box from 'grommet/components/Box';
import RadioButton from 'grommet/components/RadioButton';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import FormField from 'grommet/components/FormField';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

function mapStateToProps(state) {
  return {
    auth: state.quote.auth,
  };
}

export default connect(mapStateToProps, actions)(
  ({ auth, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Authentication
            </Heading>
            <FormField>
              <RadioButton id="opt1" label="No Login" checked={auth === 'opt1'} onChange={event => updateQuote({ values: { auth: event.target.id } })} />
              <RadioButton id="opt2" label="Email + Password" checked={auth === 'opt2'} onChange={event => updateQuote({ values: { auth: event.target.id } })} />
              <RadioButton id="opt3" label="Email + Social" checked={auth === 'opt3'} onChange={event => updateQuote({ values: { auth: event.target.id } })} />
              <RadioButton id="opt4" label="Social" checked={auth === 'opt4'} onChange={event => updateQuote({ values: { auth: event.target.id } })} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);

