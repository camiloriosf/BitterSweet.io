import React from 'react';
import Link from 'next/link';
import VisibilitySensor from 'react-visibility-sensor';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';
import Headline from 'grommet/components/Headline';
import { connect } from 'react-redux';
import * as actions from '../lib/actions/index';

export default connect(null, actions)(
  ({ updateHeader }) =>
    (
      <Article scrollStep>
        <Section pad="large" wrap justify="center" align="start" full texture="/static/ncx.jpg">
          <VisibilitySensor onChange={isVisible => updateHeader(isVisible)} />
          <Box textAlign="left">
            <Heading uppercase strong className="Title" style={{ color: '#fff' }}>
              A UNIQUE APPROACH TO SOFTWARE DEV
            </Heading>
          </Box>
          <Link prefetch href="/quote"><Button label="GET AN INSTANT QUOTE" primary /></Link>
        </Section>
        <Section pad="large" justify="center" align="center" full="vertical" colorIndex="light-1" >
          <Headline margin="none">
              Section 2
          </Headline>
        </Section>
        <Section pad="large" justify="center" align="center" full="vertical" >
          <Headline margin="none">
              Section 3
          </Headline>
        </Section>
        <Section pad="large" justify="center" align="center" full="vertical" >
          <Headline margin="none">
              Section 4
          </Headline>
        </Section>
        <Section pad="large" justify="center" align="center" full="vertical" >
          <Headline margin="none">
              Section 5
          </Headline>
        </Section>
      </Article>
  ),
);
