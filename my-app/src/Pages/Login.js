import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {useContext, useState} from "react";
  import {useNavigate} from "react-router-dom";
  import {UserContext, UserContextProvider} from "../UserContext";

  
  export default function Login() {
        const [username, setUsername] = useState('');
        const [password,setPassword] = useState('');
        const navigate = useNavigate();
        const { setUserInfo }  = useContext(UserContext);

        async function login(ev) {
            ev.preventDefault();
            const response = await fetch('http://localhost:4000/login', {
              method: 'POST',
              body: JSON.stringify({username, password}),
              headers: {'Content-Type':'application/json'},
              credentials: 'include',
            });
            if (response.ok) {
           return response.json().then(userInfo => {
             setUserInfo(userInfo); 
              navigate('/')
              });
            } else {
              alert('wrong credentials');
            }
          }

  

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Username</FormLabel>
                <Input type="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={password} onChange={ev => setPassword(ev.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={login}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }