import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Threats from 'grommet/components/icons/base/Threats';
import Cycle from 'grommet/components/icons/base/Cycle';
import Money from 'grommet/components/icons/base/Money';
import Unlock from 'grommet/components/icons/base/Unlock';

export default () => (
  <Section justify="start" align="center" pad="small" colorIndex="light-2" margin={{ top: 'large' }} >
    <Box align="center" margin={{ top: 'medium' }} full="horizontal" textAlign="center">
      <Heading uppercase strong >
        Services
      </Heading>
      <Heading tag="h2">
        What makes us great
      </Heading>
      <Heading tag="h4">
        BitterSweet is designed to make your dev
        process easier and more affordable by taking care of the whole lifecycle of your app.
      </Heading>
      <Box direction="row" wrap justify="center">
        <Box align="center" pad="medium" margin="small" size="medium" >
          <Threats size="large" colorIndex="brand" />
          <Heading tag="h3" margin="small">
            Risk Free
          </Heading>
          <Heading tag="h5">
            Don&apos;t worry about anything. We take care of everything.
          </Heading>
        </Box>
        <Box align="center" pad="medium" margin="small" size="medium" >
          <Cycle size="large" colorIndex="brand" />
          <Heading tag="h3" margin="small">
            All inclusive
          </Heading>
          <Heading tag="h5">
            With our Pay-as-you-Go option we take care of everything.
            From development to hosting, supporting and updating your project.
          </Heading>
        </Box>
        <Box align="center" pad="medium" margin="small" size="medium" >
          <Money size="large" colorIndex="brand" />
          <Heading tag="h3" margin="small">
            Pay-as-you-Go
          </Heading>
          <Heading tag="h5">
            We don&apos;t charge you anything until we finish developing your project.
            Then just pay a fraction of what it would have cost you to develop the
            standard (old) way
          </Heading>
        </Box>
        <Box align="center" pad="medium" margin="small" size="medium" >
          <Unlock size="large" colorIndex="brand" />
          <Heading tag="h3" margin="small">
            No contracts
          </Heading>
          <Heading tag="h5">
            With our Pay-as-you-Go option we don&apos;t make you sign any contracts. Pay
            on a monthly basis and only for the time that you want.
          </Heading>
        </Box>
      </Box>
    </Box>
  </Section>
  );
