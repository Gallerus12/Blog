import { Box, Flex, Text, Stack, Divider, Wrap, VStack } from '@chakra-ui/layout'
import BlogPosts from './Posts'


export default function Main() {
    return (
        
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        py={12}>
            <Box> 
                <Text fontSize={'2xl'}>Recent Posts</Text>
            <Stack direction={['column','row']} spacing={'14px'} maxW={'100%'}>
                
                    <BlogPosts />
                
                
                    <BlogPosts />
            
                
                    <BlogPosts />
            
            </Stack>
            </Box>
        </Flex>
    
    )
}