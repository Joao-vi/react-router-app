import { Heading, HStack, Image, VStack, Text, Button } from "@chakra-ui/react";
import { Form, useLoaderData, LoaderFunctionArgs } from "react-router-dom";

import { getContact, TContact } from "../services/contact";

const loader = async (args: LoaderFunctionArgs) => {
  const params = args.params as Record<string, string>;
  return getContact(params.contactId);
};

function Contact() {
  const contact = useLoaderData() as TContact;

  return (
    <HStack flex="1" align="stretch" spacing="5" py="20" h="fit-content">
      <Image
        alignSelf="start"
        src={contact.avatar || "https://placekitten.com/g/200/200"}
        borderRadius="10px"
        objectFit="contain"
      />

      <VStack h="auto" align="start">
        <HStack align="center" gap="3">
          <Heading as="h1">
            {contact.first || contact.last ? (
              <>
                {contact.first} {contact.last}
              </>
            ) : (
              <Text as="i" color="gray.400">
                No Name
              </Text>
            )}
          </Heading>
          <Favorite contact={contact} />
        </HStack>

        {contact.twitter && (
          <Text color="teal.300" fontWeight="bold">
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </Text>
        )}

        {contact.notes && <Text whiteSpace="pre-line">{contact.notes}</Text>}

        <HStack
          alignSelf="end"
          style={{ marginTop: "auto", paddingTop: 30 }}
          gap="1"
        >
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <Button type="submit" variant="delete" color="tomato">
              Delete
            </Button>
          </Form>
          <Form action="edit">
            <Button type="submit">Edit</Button>
          </Form>
        </HStack>
      </VStack>
    </HStack>
  );
}

function Favorite({ contact }: { contact: TContact }) {
  let favorite = contact.favorite;

  return (
    <Form method="post">
      <Button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        variant="favorite"
      >
        {favorite ? "★" : "☆"}
      </Button>
    </Form>
  );
}

export { loader, Contact };
