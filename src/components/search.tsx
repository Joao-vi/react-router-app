import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

const Search = () => {
  return (
    <HStack as="form" role="search" spacing="0.5">
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlass size={20} />
        </InputLeftElement>

        <Input
          name="query"
          aria-label="Search contacts"
          type="search"
          maxW="14rem"
          placeholder="Search"
          focusBorderColor="teal.400"
          bgColor="black.800"
          borderColor="black.300"
          _placeholder={{ color: "gray.400" }}
        />
      </InputGroup>
    </HStack>
  );
};

export { Search };
