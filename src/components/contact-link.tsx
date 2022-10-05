import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface IContactLink {
  href: string;
  children: React.ReactNode;
}

const itemAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } },
};

const ContactLink = ({ children, href }: IContactLink) => {
  return (
    <Text as={motion.li} variants={itemAnimation}>
      <Text
        as={Link}
        to={href}
        cursor="pointer"
        display="flex"
        align="center"
        justifyContent="space-between"
        padding=".5rem 1rem"
        bgColor="black.300"
        transition="background 150ms ease-out"
        _hover={{ bgColor: "black.600" }}
        borderRadius=".5rem"
        color="white"
      >
        {children}
      </Text>
    </Text>
  );
};

export { ContactLink };
