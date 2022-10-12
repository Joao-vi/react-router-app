import { VStack, Text, List } from "@chakra-ui/react";

function Index() {

    return (
        <VStack flex='1' justify='center' textAlign='center'>
            <Text color='gray.400' fontStyle='italic'>This project was reproduced by <Text display='inline' color='teal.400'>João</Text> from a React Router DOM course.</Text>
            <Text alignSelf='start' fontWeight='semibold'>Stack used</Text>
            <List listStyleType='initial' textAlign='start'>
                <li>React</li>
                <li>Typescript</li>
                <li>React Router DOM</li>
                <li>Framer Motion</li>
                <li>Chakra UI</li>
                <li>Phosphor React</li>
            </List>
        </VStack>
    )
}

export { Index }