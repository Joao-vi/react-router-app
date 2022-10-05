import { Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { Outlet, Form } from "react-router-dom";

import { Search } from "../components/search";
import { ContactList } from "../components/contact-list";
import { Footer } from "../components/footer";

import { getContacts, createContact } from "../services/contact";

const action = async () => {
  await createContact();
};

const loader = async () => {
  const contacts = await getContacts();

  return { contacts };
};

function Root() {
  return (
    <VStack height="100%" maxW={900} mx="auto" align="stretch" spacing="0">
      <HStack flex="1" alignItems="stretch" gap="5">
        <VStack
          flex="0 0 320px"
          h="auto"
          align="stretch"
          bgColor="black.700"
          border="1px solid"
          borderColor="black.400"
          borderBottom="none"
          __css={{
            display: "flex",
            flexDirection: "column",
            "> *": {
              padding: "1.5rem",
              borderBottom: "1px solid",
              borderColor: "black.400",
            },
          }}
        >
          <HStack>
            <Search />

            <Form method="post">
              <Button type="submit" colorScheme="teal">
                New
              </Button>
            </Form>
          </HStack>

          <ContactList />
        </VStack>

        <Outlet />
      </HStack>

      <Footer />
    </VStack>
  );
}

export { Root, loader, action };
