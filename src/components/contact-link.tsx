import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IContactLink {
  href: string;
  children: React.ReactNode;
}


const ContactLink = ({ children, href }: IContactLink) => {

  return (
    <Text as={motion.li} variants={itemAnimation}>
      <Text
        as={NavLink}
        to={href}
        border='1px solid'
        borderColor='transparent'
        variant='link'
        style={(({ isActive, isPending }: any) => isActive ? { backgroundColor: "#363736" } : isPending ? { borderColor: '#363736' } : undefined) as any}
      >
        {children}
      </Text>
    </Text >
  );
};

const itemAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } },
};


export { ContactLink };
