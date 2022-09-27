import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex as='footer' direction='column' textAlign='center'> 
            <Text as='span' fontWeight='semibold' color='whiteAlpha.900'>React Router Contacts</Text> 
            <Text as='span' color='whiteAlpha.500'> Reproduced by João</Text>
        </Flex>
    )
}

export { Footer }