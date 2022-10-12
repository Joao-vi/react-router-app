import { Heading, HStack, Image, VStack, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Form, useLoaderData, LoaderFunctionArgs, useFetcher, ActionFunctionArgs } from "react-router-dom";

import { getContact, TContact, updateContact } from "../services/contact";
import { PAGE_ANIMATION } from './config'

const Page = motion(Flex)

function Contact() {
  const contact = useLoaderData() as TContact;

  return (
    <Page
      variants={PAGE_ANIMATION}
      initial='hidden'
      animate='visible'
      exit='hidden'
      flex="1"
      align='streetch'
      spacing="5"
      py="20"
      px='3'
      h="fit-content"
      direction={['column', 'column', 'row']}
      gap='5'

    >
      <Image
        alignSelf={['center', 'center', 'start']}
        src={contact.avatar || "https://placekitten.com/g/200/200"}
        borderRadius="10px"
        objectFit="contain"
      />

      <VStack flex='1' h="auto" align="stretch">
        <HStack align="center" justify='space-between' gap="3">
          <Heading as="h1" fontSize={['2xl', '2xl', '4xl']}>
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
    </Page>
  );
}

function Favorite({ contact }: { contact: TContact }) {
  let favorite = contact.favorite;
  const fetcher = useFetcher()

  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true'
  }

  return (
    <fetcher.Form method="post">
      <Button
        type="submit"
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        variant="favorite"
      >
        {favorite ? "★" : "☆"}
      </Button>
    </fetcher.Form>
  );
}

const loader = async (args: LoaderFunctionArgs) => {
  const params = args.params as Record<string, string>;
  const contact = await getContact(params.contactId);

  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return contact
};

async function action({ request, params }: ActionFunctionArgs) {
  let formData = await request.formData();

  console.log(formData)
  return updateContact(params.contactId!, {
    favorite: formData.get("favorite") === "true",
  });
}

export { loader, Contact, action };
