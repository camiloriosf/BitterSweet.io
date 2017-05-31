import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

function mapStateToProps(state) {
  return {
    apis: state.quote.apis,
  };
}

export default connect(mapStateToProps, actions)(
  ({ apis, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Cloud APIs (optional)
            </Heading>
            <FormField label="Number of Cloud APIs">
              <NumberInput
                value={apis}
                min={0}
                onChange={event => updateQuote({ values: { apis: event.target.value } })}
              />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);
