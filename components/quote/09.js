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
    product: state.quote.product,
  };
}

export default connect(mapStateToProps, actions)(
  ({ product, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Product
            </Heading>
            <FormField>
              <RadioButton id="opt1" label="Prototype" checked={product === 'opt1'} onChange={event => updateQuote({ values: { product: event.target.id } })} />
              <RadioButton id="opt2" label="MVP" checked={product === 'opt2'} onChange={event => updateQuote({ values: { product: event.target.id } })} />
              <RadioButton id="opt3" label="Polished" checked={product === 'opt3'} onChange={event => updateQuote({ values: { product: event.target.id } })} />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);
