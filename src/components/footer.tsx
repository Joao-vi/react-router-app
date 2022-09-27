import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex as='footer' direction='column' textAlign='center' css={{ borderBottom: 'none!important' }}> 
            <Text as='span' fontWeight='semibold' color='whiteAlpha.900'>React Router Contacts</Text> 
        </Flex>
    )
}

export { Footer }