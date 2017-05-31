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
    data: state.quote.data,
  };
}

export default connect(mapStateToProps, actions)(
  ({ data, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Data
            </Heading>
            <FormField>
              <RadioButton id="opt1" label="None" checked={data === 'opt1'} onChange={event => updateQuote({ values: { data: event.target.id } })} />
              <RadioButton id="opt2" label="Database" checked={data === 'opt2'} onChange={event => updateQuote({ values: { data: event.target.id } })} />
              <RadioButton id="opt3" label="Database + Media" checked={data === 'opt3'} onChange={event => updateQuote({ values: { data: event.target.id } })} />
              <RadioButton id="opt4" label="Integrate existing data source" checked={data === 'opt4'} onChange={event => updateQuote({ values: { data: event.target.id } })} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);
