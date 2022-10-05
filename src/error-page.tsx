import { Heading, VStack, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <VStack h="100vh" justify="center" spacing="4">
      <Heading color="teal.400" fontSize="6xl">
        Oops!
      </Heading>
      <Text fontSize="2xl">Sorry, an expected error has occurred</Text>
      <p>
        <Text as="i" color="gray.400">
          {error?.statusText || error?.message}
        </Text>
      </p>
    </VStack>
  );
};

export { ErrorPage };
