import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';

export default () => (
  <Box pad="small" align="center" justify="center">
    <Animate enter={{ animation: 'slide-left', duration: 300, delay: 0 }} keep>
      <Box>
        <Heading uppercase tag="h2" >
          Great!
        </Heading>
        <Box margin="small" pad="small">
          You are 1 click away from starting your new project.
        </Box>
      </Box>
    </Animate>
  </Box>
  );
