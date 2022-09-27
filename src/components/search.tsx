import { Button, HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { MagnifyingGlass } from 'phosphor-react'

const Search = () => {

    return (
        <HStack spacing='0.5'>
            <InputGroup>
                <InputLeftElement>
                    <MagnifyingGlass size={20}  />
                </InputLeftElement>

                <Input maxW='14rem' placeholder='Search' focusBorderColor='teal.400' bgColor='black.800' borderColor='black.300' _placeholder={ { color: 'gray.400' }}/>
            </InputGroup>
            
            <Button colorScheme='teal' >New</Button>
        </HStack>
    )
}

export { Search }