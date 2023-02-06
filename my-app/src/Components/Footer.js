import {
    Box,
    Container,
    Input,
    Stack,
    Text,
    HStack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  export default function SmallWithNavigation() {
    return (
      <Box 
        as={'footer'}
        bg={useColorModeValue('#ced5e5', '#1c2132')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link as={Link} to={'/Subscribe'}>Subscribe</Link>
            <Link as={Link} to={'/Tags'}>Tags</Link>
            <Link as={Link} to={'/About'}>About</Link>
            <Link as={Link} to={'/Login'}>Login</Link>
          </Stack>
          <HStack>
          <Text>Subscribe for new post updates!</Text>
          <Input
              type={'email'}
              focusBorderColor='lime'
              placeholder={'Email Address'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.600')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
            />
            <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Submit
            </Button>
          </HStack>
        </Container>
      </Box>
    );
  }