import { Flex, Text } from '@chakra-ui/react'

const ContactList = () => {
    return (
        <Flex flex='1' as='ul' dir='column' gap='1'>
            <Text as='li'>Your name</Text>
            <Text as='li'>Your Friend</Text>
        </Flex>
    )
}

export { ContactList}