import React from 'react';
import Link from 'next/link';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';

export default () =>
    (
      <Article scrollStep>
        <Section pad="large" wrap justify="center" align="start" full texture="/static/ncx.jpg">
          <Box textAlign="left">
            <Heading uppercase strong className="Title" style={{ color: '#fff' }}>
              A UNIQUE APPROACH TO SOFTWARE DEV
            </Heading>
          </Box>
          <Link prefetch href="/quote"><Button label="GET AN INSTANT QUOTE" primary /></Link>
        </Section>
      </Article>
  );
