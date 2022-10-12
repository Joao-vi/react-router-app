import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";
import { ChangeEvent, useEffect, useRef } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom"
import { debounce } from "../utils/debounce";

const Search = () => {
  const inputRef = useRef<HTMLInputElement>()
  const { query } = useLoaderData() as any
  const submit = useSubmit()

  const handleSearchContact = (e: ChangeEvent<HTMLInputElement>) => {
    submit(e.target.form)
  }

  useEffect(() => {
    if (!inputRef.current) return

    inputRef.current.value = query
  }, [query])


  return (
    <HStack as={Form} role="search" spacing="0.5">
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlass size={20} />
        </InputLeftElement>

        <Input
          ref={inputRef as any}
          defaultValue={query}
          onChange={debounce(handleSearchContact)}
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
