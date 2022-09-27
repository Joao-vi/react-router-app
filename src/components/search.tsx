import { Button, HStack, Input, InputGroup } from "@chakra-ui/react"
import { MagnifyingGlass } from 'phosphor-react'

const Search = () => {

    return (
        <HStack gap='1'>
            <InputGroup>
                <MagnifyingGlass size={32} />   
                <Input placeholder='Search' />
            </InputGroup>
            
            <Button>New</Button>
        </HStack>
    )
}

export { Search }