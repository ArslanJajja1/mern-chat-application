import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [pic, setPic] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow((prev) => !prev);
  };
  const postDetails = (pics) => {};
  const submitHandler = (e) => {};
  return (
    <VStack>
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            placeholder="Enter Password"
            type={show ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'show' : 'hide'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="comfirm-password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            value={confirmPassword}
            placeholder="Confirm Password"
            type={show ? 'text' : 'password'}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'show' : 'hide'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="picture" isRequired>
        <FormLabel>Upload Picture</FormLabel>
        <Input type="file" accept="image/*" onChange={(e) => postDetails(e.target.files[0])} p={1.5} />
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
        Sign up
      </Button>
    </VStack>
  );
};

export default Signup;
