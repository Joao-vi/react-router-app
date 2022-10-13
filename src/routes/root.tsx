import { Box, Button, HStack, IconButton, VStack, Flex } from "@chakra-ui/react";
import { Outlet, Form, redirect, useLocation, useNavigation, LoaderFunctionArgs } from "react-router-dom";

import { Search } from "../components/search";
import { ContactList } from "../components/contact-list";
import { Footer } from "../components/footer";

import { getContacts, createContact } from "../services/contact";
import { AnimatePresence, motion } from "framer-motion";
import { CircleNotch, UserList } from "phosphor-react";
import { useReducer } from "react";
import styled from "@emotion/styled";


function Root() {
  const { pathname } = useLocation()

  return (
    <VStack height="100%" maxW={900} mx="auto" align="stretch" spacing="0">
      <HStack position='relative' flex="1" alignItems="stretch" justify='space-between' gap="5" >
        <Loading />
        <SideBarContainer />
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
      position='fixed'
      right='5'
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


const SidebarStyled = styled(VStack)`
  z-index: 9;
  flex: 0 0 320px;
  
  display: flex ;
  flex-direction: column;
  align-items: stretch;
  height: auto;
  
  margin: 0!important;
  
  border: 1px solid #333233;
  borderBottom: none;

  transition: transform 300ms ease-out;
  
  & > * {
      padding: 1.5rem;
      borderBottom: 1px solid;
      borderColor: black.400;
  }

  @media(max-width: 768px) {
    position: fixed;
    height: 100vh;
    top: 0;
    width: 80vw;

  }
  
  @media(min-width: 768px) {
    transform: translateX(0%)!important;
  }


`

const SideBarContainer = () => {
  const [isOpen, toggle] = useReducer(state => !state, false)



  return (
    <>
      {/* Mobile Button */}
      <Flex
        display={['flex', 'flex', 'none']}
        position='fixed'
        left={0}
        right={0}
        h='60px'
        px='3'
        alignItems='center'
        bgColor='black.700'
        __css={{ margin: '0px!important' }}
      >
        <IconButton
          aria-label="Open and Close Users menu."
          onClick={toggle}
          display={['flex', 'flex', 'none']}
          justifyContent='center'
          alignItems='center'
        >
          <UserList size={24} />
        </IconButton>
      </Flex>

      {/* Overlay */}
      <Box
        position='fixed'
        inset='0'
        css={{
          zIndex: 1,
          pointerEvents: isOpen ? "all" : 'none',
          backgroundColor: isOpen ? 'rgba(0,0,0,0.8)' : 'transparent',
          transition: 'background 300ms ease-out'
        }}
        onClick={toggle}
      />

      {/* Side Bar */}
      <SidebarStyled
        style={{ transform: isOpen ? 'translateX(0%)' : "translateX(-100%)" }}
        bgColor='black.700'
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
      </SidebarStyled>
    </>
  )
}


export { Root, loader, action };
