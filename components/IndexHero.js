import React from 'react';
import { connect } from 'react-redux';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import * as actions from '../lib/actions/index';


function mapStateToProps(state) {
  return {
    section: state.index.section,
    header: state.index.header,
    quote: state.index.quote,
    services: state.index.services,
    about: state.index.about,
    contact: state.index.contact,
  };
}

export default connect(mapStateToProps, actions)(
  props => (
    <Section texture="/static/ncx.jpg" full="vertical" justify="center" align="start" pad="large" colorIndex="dark" >
      <Header fixed float justify="between" pad={{ horizontal: 'medium' }} style={{ backgroundColor: 'transparent' }}>
        <Anchor onClick={() => props.changeSection({ section: 0 })} style={{ textDecoration: 'none' }}>
          <Title>
            Company Name
          </Title>
        </Anchor>
        <Box flex justify="end" direction="row" responsive wrap>
          <Anchor label="QUOTE" onClick={() => props.changeSection({ section: 1 })} style={{ marginRight: 30, textDecoration: props.quote }} />
          <Anchor label="SERVICES" onClick={() => props.changeSection({ section: 2 })} style={{ marginRight: 30, textDecoration: props.services }} />
          <Anchor label="ABOUT" onClick={() => props.changeSection({ section: 3 })} style={{ marginRight: 30, textDecoration: props.about }} />
          <Anchor label="CONTACT" onClick={() => props.changeSection({ section: 4 })} style={{ textDecoration: props.contact }} />
        </Box>
      </Header>
      <Box textAlign="left" >
        <Heading uppercase strong >
          A UNIQUE APPROACH TO SOFTWARE DEV
        </Heading>
      </Box>
      <Button label="GET AN INSTANT QUOTE" onClick={() => props.changeSection({ section: 1 })} style={{ backgroundColor: '#dc2878', borderColor: '#dc2878' }} />
    </Section>
  ),
);

