import { Card, CardBody, Heading, Image, Stack, Text, Divider, LinkOverlay, useColorModeValue } from '@chakra-ui/react'

export default function BlogPosts() {
    return(
        <Card 
        bg={useColorModeValue('#ced5e5', '#1c2232')} 
        size='xsm' 
        overflow='hidden' 
        variant={'outline'} 
        direction={['column', 'row']}>
            <Image 
                src='https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?w=1380&t=st=1674877037~exp=1674877637~hmac=dbb3feec8d7c8c9ed2f476fd0f365833b800d479308837d95903e896daefaba8'
                alt='None'
                borderRadius={'sm'}
                objectFit='cover'
                maxW={{ base: '100%', sm: '100px' }}
                /> 
        <LinkOverlay href='#'>
                <Stack>
                    <CardBody>
                        <Heading size='md'>The perfect latte</Heading>
                            <Divider/>
                                <Text py='2'>
                                 Caffè latte is a coffee beverage of Italian origin made with espresso
                                  and steamed milk.
                                </Text>
                    </CardBody>
   
                </Stack>
        </LinkOverlay>
        </Card>
    )
}