import React from 'react';
import Box from 'grommet/components/Box';
import CheckBox from 'grommet/components/CheckBox';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import NumberInput from 'grommet/components/NumberInput';
import FormField from 'grommet/components/FormField';
import { connect } from 'react-redux';
import * as actions from '../../lib/actions/index';

function mapStateToProps(state) {
  return {
    web: state.quote.web,
    android: state.quote.android,
    ios: state.quote.ios,
    responsive: state.quote.responsive,
    pages: state.quote.pages,
    design: state.quote.design,
  };
}

export default connect(mapStateToProps, actions)(
  ({ web, android, ios, responsive, pages, design, updateQuote }) =>
    (
      <Box pad="small" align="center" justify="center">
        <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
          <Box>
            <Heading uppercase tag="h2" align="center" >
              Tell us about your app
            </Heading>
            <FormField label="Platforms">
              <CheckBox checked={web} onChange={event => updateQuote({ values: { web: event.target.checked } })} label="Web" />
              <CheckBox checked={android} onChange={event => updateQuote({ values: { android: event.target.checked } })} label="Android" />
              <CheckBox checked={ios} onChange={event => updateQuote({ values: { ios: event.target.checked } })} label="iOS" />
            </FormField>
            <Animate visible={web} enter={{ animation: 'slide-left', duration: 300, delay: 0 }} leave={{ animation: 'slide-left', duration: 300, delay: 0 }} >
              <FormField label="Responsive Web">
                <CheckBox checked={responsive} onChange={event => updateQuote({ values: { responsive: event.target.checked } })} label="No/Yes" toggle />
              </FormField>
            </Animate>
            <FormField label="Number of pages/screens">
              <NumberInput
                value={pages}
                min={1}
                onChange={event => updateQuote({ values: { pages: event.target.value } })}
              />
            </FormField>
            <FormField label="Design Services">
              <CheckBox checked={design} onChange={event => updateQuote({ values: { design: event.target.checked } })} label="No/Yes" toggle />
            </FormField>
          </Box>
        </Animate>
      </Box>
    ),
);
