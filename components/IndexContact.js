import React from 'react';
import { connect } from 'react-redux';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import VisibilitySensor from 'react-visibility-sensor';
import * as actions from '../lib/actions/index';

function mapStateToProps(state) {
  return {
    section: state.index.section,
  };
}

export default connect(mapStateToProps, actions)(
  props => (
    <Section texture="/static/ferret_background.png" justify="center" full="vertical" align="start" pad="large" colorIndex="dark" >
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            props.changeHeader({ header: 4, contact: 'underline' });
          } else { props.changeHeader({ contact: 'none' }); }
        }}
      />
      <Heading uppercase strong >
        Contact
    </Heading>
    </Section>
  ),
);
