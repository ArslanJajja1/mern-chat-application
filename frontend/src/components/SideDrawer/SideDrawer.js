import React, { useState } from 'react';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from '../Modal/ProfileModal';
import { useHistory } from 'react-router-dom';
const SideDrawer = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResut] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { user } = ChatState();
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    history.push('/');
    window.location.reload();
  };
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
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
          </MenuButton>
          <MenuList>
            <ProfileModal user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModal>
            <MenuDivider />
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
