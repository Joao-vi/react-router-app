import { VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

import { ContactLink } from "./contact-link";

import { TContact } from "../services/contact";

const listAnimation = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const ContactList = () => {
  const { contacts } = useLoaderData() as { contacts: TContact[] };

  return (
    <VStack
      as={motion.ul}
      align="stretch"
      spacing="2"
      overflow="auto"
      maxHeight="100%"
      _hover={{ "::-webkit-scrollbar-thumb": { bgColor: "gray.400" } }}
      initial="hidden"
      animate="visible"
      variants={listAnimation}
      css={{ borderBottom: "none" }}
    >
      {!!contacts.length ? (
        <>
          {contacts.map((contact) => (
            <ContactLink href={`contacts/${contact.id}`} key={contact.id}>
              {contact.first || contact.last ? (
                `${contact.first} ${contact.last}`
              ) : (
                <Text as="i" fontStyle="italic" color="gray.400">
                  No name
                </Text>
              )}
              {contact.favorite && <span>★</span>}
            </ContactLink>
          ))}
        </>
      ) : (
        <Text as="i" fontStyle="italic" color="gray.400">
          No contacts
        </Text>
      )}
    </VStack>
  );
};

export { ContactList };
