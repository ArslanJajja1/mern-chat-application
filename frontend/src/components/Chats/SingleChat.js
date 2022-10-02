import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { getSender, getSenderFull } from '../../config/ChatLogics';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from '../Modal/ProfileModal';
import UpdateGroupChatModal from '../Modal/UpdateGroupChatModal';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: '28px', md: '30px' }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: 'space-between' }}
            alignItems="center"
          >
            <IconButton display={{ base: 'flex', md: 'none' }} icon={<ArrowBackIcon />} onClick={() => setSelectedChat('')} />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat?.users)}
                <ProfileModal user={getSenderFull(user, selectedChat?.users)} />
              </>
            ) : (
              <>
                {selectedChat?.chatName.toUpperCase()}
                {<UpdateGroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
              </>
            )}
          </Text>
          <Box>Message</Box>
        </>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work Sans">
            Click on user to start chatting !
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
