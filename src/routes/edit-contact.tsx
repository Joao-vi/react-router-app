import {
  Input,
  VStack,
  Text,
  HStack,
  Button,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import {
  ActionFunctionArgs,
  Form,
  redirect,
  useLoaderData,
} from "react-router-dom";

import { TContact, updateContact } from "../services/contact";

const INPUT_STYLES = {
  focusBorderColor: "teal.400",
  bgColor: "black.800",
  borderColor: "black.300",
  _placeholder: { color: "gray.400" },
};

const action = async ({ request, params }: ActionFunctionArgs) => {
  const { contactId } = params as any;

  const formData = (await request.formData()) as any;
  const updates = Object.fromEntries(formData) as TContact;

  await updateContact(contactId, updates);

  return redirect(`/contacts/${contactId} `);
};

function EditContact() {
  const contact = useLoaderData() as TContact;

  return (
    <VStack
      as={Form}
      method="post"
      align="stretch"
      spacing="5"
      p="20"
      h="fit-content"
    >
      <Heading>Edit</Heading>

      <VStack align="start" spacing="2">
        <Text as="label">Name</Text>
        <HStack spacing="2">
          <Input
            {...INPUT_STYLES}
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact.first}
          />
          <Input
            {...INPUT_STYLES}
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact.last}
          />
        </HStack>
      </VStack>

      <VStack align="start" spacing="2">
        <Text as="label">Twitter</Text>
        <Input
          {...INPUT_STYLES}
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </VStack>

      <VStack align="start" spacing="2">
        <Text as="label">Avatar URL</Text>
        <Input
          {...INPUT_STYLES}
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </VStack>

      <VStack align="start" spacing="2">
        <Text as="label">Notes</Text>
        <Textarea
          {...INPUT_STYLES}
          name="notes"
          defaultValue={contact.notes}
          rows={6}
        />
      </VStack>

      <HStack spacing="2" justify="end">
        <Button type="button" variant="delete">
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </HStack>
    </VStack>
  );
}

export { EditContact, action };
