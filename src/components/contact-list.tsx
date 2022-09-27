import { VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { ContactLink } from './contact-link'

const array = Array.from({length: 10}, (_,i)=>i)

console.log(array)

const listAnimation = {
    hidden: {},
    visible: { 
        transition: {
            delayChildren: 0,
            staggerChildren: 0.1,
        }
    }
}

const ContactList = () => {

    return (
        <VStack 
            flex='1' 
            as={motion.ul} 
            align='stretch' 
            spacing='2'
            overflow='auto'
            maxHeight='100%'
            _hover={{ "::-webkit-scrollbar-thumb": { bgColor: 'gray.400'}}}
            initial="hidden"
            animate='visible'    
            variants={listAnimation}
            
            >
                {array.map((_,index) => 
                    <ContactLink key={index}>Your name</ContactLink>
                )}
        </VStack>
    )
}

export { ContactList}