import React from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';

export default () => (
  <Article>
    <Section
      full
      texture="/static/ferret_background.png"
      justify="center"
      align="center"
      colorIndex="dark"
    >
      <Headline margin="none" strong>
        Section 1
    </Headline>
    </Section>
  </Article>
);
