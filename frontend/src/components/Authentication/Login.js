import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    setShow((prev) => !prev);
  };
  const submitHandler = (e) => {};
  return (
    <VStack>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input placeholder="Enter Password" type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'show' : 'hide'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>
        Login
      </Button>
      <Button
        variant="solid"
        width="100%"
        colorScheme="red"
        onClick={() => {
          setEmail('guest@example.com');
          setPassword('password');
        }}
      >
        Guest User
      </Button>
    </VStack>
  );
};

export default Login;
