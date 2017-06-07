import React from 'react';
import Link from 'next/link';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Article from 'grommet/components/Article';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';

export default () =>
    (
      <Article scrollStep>
        <Section pad="large" wrap justify="center" align="start" full texture="/static/ncx.jpg">
          <Box textAlign="left">
            <Heading uppercase strong style={{ color: '#fff' }}>
              A UNIQUE APPROACH TO SOFTWARE DEV
            </Heading>
          </Box>
          <Link prefetch href="/quote"><Button label="GET AN INSTANT QUOTE" primary /></Link>
          <Carousel persistentNav={false} autoplaySpeed={3000} >
            <Box pad="large" textAlign="left" >
              <Box pad="medium" textAlign="left" >
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  forget about technical stuff
                </Heading>
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  and FOCUS on your business
                </Heading>
              </Box>
            </Box>
            <Box pad="large" size="medium" textAlign="left" >
              <Box pad="medium" size="medium" textAlign="left">
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  no hidden costs
                </Heading>
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  no huge investments
                </Heading>
              </Box>
            </Box>
            <Box pad="large" size="medium" textAlign="left" >
              <Box pad="medium" size="medium" textAlign="left">
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  build high-performing apps
                </Heading>
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  that automatically scales
                </Heading>
              </Box>
            </Box>
            <Box pad="large" size="medium" textAlign="left" >
              <Box pad="medium" size="medium" textAlign="left">
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  top of the line technologies
                </Heading>
                <Heading strong tag="h3" style={{ color: '#fff' }}>
                  that big companies use
                </Heading>
                <Box direction="row" pad={{ between: 'medium' }}>
                  <Image src="/static/react.png" size="thumb" />
                  <Image src="/static/redux.png" size="thumb" />
                  <Image src="/static/graphql.png" size="thumb" />
                  <Image src="/static/mongodb.png" size="thumb" />
                  <Image src="/static/electron.gif" size="thumb" />
                </Box>
              </Box>
            </Box>
          </Carousel>
        </Section>
      </Article>
  );
