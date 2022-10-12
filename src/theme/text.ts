import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Text: ComponentStyleConfig = {
  variants: {
    link:  {
        cursor:"pointer",
        variant:'link',
        display:"flex",
        align:"center",
        justifyContent:"space-between",
        padding:".5rem 1rem",
        transition:"background 150ms ease-out",
        _hover:{ bgColor: "black.600" },
        borderRadius:".5rem",
        color:"white",
    },

    'link--active': {
      bgColor:"black.300",
    } 
  },
  defaultProps: {
    colorScheme: "teal",
  },
};

export { Text };
