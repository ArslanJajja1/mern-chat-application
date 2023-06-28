import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React from "react";

const UserBadgeItem = ({ user,selectedChat,loggedInUser, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      bgColor="purple"
      color="white"
      cursor="pointer"
    >
      {user.name}
      {
        (user._id === loggedInUser._id) && <CloseIcon pl={1} onClick={()=>handleFunction(user)} />
      }
    </Box>
  );
};

export default UserBadgeItem;
