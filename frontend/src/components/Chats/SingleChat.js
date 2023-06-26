import React, { useState } from 'react';
import axios from 'axios';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, FormControl, IconButton, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import { getSender, getSenderFull } from '../../config/ChatLogics';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from '../Modal/ProfileModal';
import UpdateGroupChatModal from '../Modal/UpdateGroupChatModal';

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(false)
  const [newMessage,setNewMessage] = useState()
  const toast = useToast()
  const { user, selectedChat, setSelectedChat } = ChatState();
  const sendMessage = async(e)=>{
    if(e.key == 'Enter' && newMessage){
      try { 
        const config = {
          headers : {
            "Content-Type":"application/json",
            "authorization" : `Bearer ${user.token}` 
          }
        }
        setNewMessage('')
        const data = await axios.post('/api/message',{content:newMessage,chatId:selectedChat._id},config)
        console.log(data);
        setMessages([...messages,data])
      } catch (error) {
        toast({
          title:'Error Occured',
          description:'Failed to send message',
          status:'error',
          isClosable:true,
          position:'bottom'
        })
      }
    }
  }
  const typingHandler = (e)=>{
    setNewMessage(e.target.value)
  }

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
          <Box
            display='flex'
            flexDir='column'
            justifyContent='flex-end'
            p={3}
            bg='#E8E8E8'
            w='100%'
            h='100%'
            borderRadius='lg'
            overflowY='hidden'
            >
            {loading ? (<Spinner 
            size='xl'
            w={20}
            h={20}
            alignSelf='center'
            margin='auto'
            />) : (
            <div>
              {/* Messages */}
            </div>)}
            <FormControl
              onKeyDown={sendMessage}
              isRequired
              mt={3}
            >
              <Input 
              variant='filled'
              bg='#E0E0E0'
              placeholder='Enter a message'
              onChange={typingHandler}
              value={newMessage}
              />
            </FormControl>
          </Box>
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
