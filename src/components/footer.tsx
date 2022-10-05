import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      p="5"
      direction="column"
      textAlign="center"
      border="1px solid"
      bgColor="black.700"
      borderColor="black.400"
    >
      <Text as="span" fontWeight="semibold" fontStyle="italic" color="gray.400">
        React Router Contacts
      </Text>
    </Flex>
  );
};

export { Footer };
