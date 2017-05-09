import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';

export default () => (
  <Header
    splash={false}
    size="xlarge"
    fixed
    float
  >
    <Title>
      Sample Title
  </Title>
    <Box
      flex
      justify="end"
      direction="row"
      responsive={false}
    >
      <Menu
        icon={<Actions />}
        dropAlign={{ right: 'right', top: 'top' }}
      >
        <Anchor
          href="#"
          className="active"
        >
          First
      </Anchor>
        <Anchor href="#">
          Second
      </Anchor>
        <Anchor href="#">
          Third
      </Anchor>
      </Menu>
    </Box>
  </Header>
);
