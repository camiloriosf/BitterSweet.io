import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

function mapStateToProps(state) {
  return {
    admin: state.quote.admin,
  };
}

export default connect(mapStateToProps, actions)(
  ({ admin, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Admin Console (optional)
            </Heading>
            <FormField>
              <CheckBox checked={admin} onChange={event => updateQuote({ values: { admin: event.target.checked } })} label="No/Yes" toggle />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);

