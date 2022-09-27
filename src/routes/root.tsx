import { Flex } from '@chakra-ui/react'

import { Search } from '../components/search';
import { ContactList } from '../components/contact-list';
import { Footer } from '../components/footer';

export function Root() {
    return (
      <Flex height='100%'>
        <Flex direction='column' justify='center' bgColor='black.700'  borderRight='1px solid' borderColor='black.400' css={{ "> *": { padding: '2rem 1rem', borderBottom: '1px solid', borderColor: 'black.400'}}}>
            <Search />
            <ContactList />
            <Footer />
        </Flex>
        <Flex>Details</Flex>
      </Flex>
    );
  }