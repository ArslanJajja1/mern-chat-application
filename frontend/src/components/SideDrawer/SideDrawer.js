import React, { useState } from 'react';
import { Box, Button, Menu, MenuButton, Text, Tooltip } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';

const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResut] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="Search users for chat" hasArrow placement="bottom-end" textColor="white">
        <Button variant="ghost">
          <i class="fa-solid fa-magnifying-glass"></i>
          <Text display={{ base: 'none', md: 'flex' }} px="4">
            Search Users
          </Text>
        </Button>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="work sans">
        Mern Chat App
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2xl" margin={1} />
          </MenuButton>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
