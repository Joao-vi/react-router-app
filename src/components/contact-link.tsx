import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface IContactLink  {
    children: React.ReactNode
}

const itemAnimation = { 
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: .3 }  } 
}


const ContactLink = ({ children }: IContactLink) => {


    return ( 
        <Text 
            as={motion.li}
            variants={itemAnimation}
            cursor='pointer'
            padding='.5rem 1rem'
            bgColor='black.300'
            _hover={{ bgColor: 'black.600'}}
            transition='background 150ms ease-out'
            borderRadius='.5rem'
            color='white'
       >
            {children}
       </Text>
    )
}

export { ContactLink }