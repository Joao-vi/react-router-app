import React, { useEffect, useRef } from "react";
import { Box, Button, Flex, HStack, VStack } from "@chakra-ui/react";
import { Outlet, Form, redirect, useLocation, useNavigate, useNavigation, LoaderFunctionArgs } from "react-router-dom";

import { Search } from "../components/search";
import { ContactList } from "../components/contact-list";
import { Footer } from "../components/footer";

import { getContacts, createContact } from "../services/contact";
import { AnimatePresence, motion } from "framer-motion";
import { CircleNotch } from "phosphor-react";


function Root() {
  const { pathname } = useLocation()

  return (
    <VStack height="100%" maxW={900} mx="auto" align="stretch" spacing="0">
      <HStack position='relative' flex="1" alignItems="stretch" justify='space-between' gap="5" >
        <Loading />

        <VStack
          flex="0 0 320px"
          h="auto"
          align="stretch"
          bgColor="black.700"
          border="1px solid"
          borderColor="black.400"
          borderBottom="none"
          style={{ margin: 0 }}
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

        <AnimatePresence mode="wait">
          <Outlet key={pathname} />
        </AnimatePresence>
      </HStack>

      <Footer />
    </VStack>
  );
}

const action = async () => {
  const contact = await createContact();

  return redirect(`/contacts/${contact.id}/edit`)
};

const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");

  const contacts = await getContacts(query || '');

  return { contacts, query };
};


const VARIANTS = {
  hidden: {
    scale: .8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  }
}

const LoadingIcon = motion(CircleNotch)

const Loading = () => {
  const { state } = useNavigation();

  return (
    <Box
      position='absolute'
      right={0}
      top='5'
    >
      <AnimatePresence>
        {state === 'loading' &&
          <Box
            as={motion.div}
            variants={VARIANTS}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <LoadingIcon
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1
              }}
              size={32}
            />
          </Box>
        }
      </AnimatePresence >
    </Box>
  )
}


export { Root, loader, action };
