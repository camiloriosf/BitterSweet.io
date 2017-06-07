import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Currency from 'grommet/components/icons/base/Currency';
import Calculator from 'grommet/components/icons/base/Calculator';
import Deploy from 'grommet/components/icons/base/Deploy';
import Code from 'grommet/components/icons/base/Code';
import Contact from 'grommet/components/icons/base/Contact';
import Grow from 'grommet/components/icons/base/Grow';

export default () => (
  <Section justify="start" full="vertical" align="stretch" pad="small" colorIndex="light-2" >
    <Box align="stretch" margin={{ top: 'medium' }} textAlign="center" >
      <Heading uppercase strong >
          How BitterSweet Works
      </Heading>
      <Box direction="row" margin={{ top: 'large' }} pad={{ between: 'medium' }} >
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Currency size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            Quote and get the final price
          </Heading>
          <Heading tag="h5" >
            There are no hidden costs, we charge the same regardless of the content of your web/app.
          </Heading>
        </Box>
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Contact size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            Getting to know you
          </Heading>
          <Heading tag="h5" >
            We will contact you in less than 24 hrs to talk about your product
          </Heading>
        </Box>
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Code size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            Start working
          </Heading>
          <Heading tag="h5" >
            During this time you won&apos;t be charged. We don&apos;t ask for anything in advance
          </Heading>
        </Box>
      </Box>
      <Box direction="row" margin={{ top: 'large' }} pad={{ between: 'medium' }} >
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Deploy size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            Uploading your project
          </Heading>
          <Heading tag="h5" >
            If everything is ok and you are happy with the product we will deploy it
          </Heading>
        </Box>
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Calculator size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            No hidden costs
          </Heading>
          <Heading tag="h5" >
            We will charge you on a monthly basis, no contracts attached,
            just pay for as long as you need to keep your app online.
          </Heading>
        </Box>
        <Box textAlign="center" align="center" pad={{ between: 'small' }} size="medium" >
          <Grow size="large" colorIndex="brand" />
          <Heading tag="h4" uppercase >
            Make your business grow
          </Heading>
          <Heading tag="h5" >
            We will keep a close eye on your app, managing everything,
            so you only need to worry making your business bigger.
          </Heading>
        </Box>
      </Box>
    </Box>
  </Section>
  );
