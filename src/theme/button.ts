import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  baseStyle: {
    zIndex: 0,
  },
  variants: {
    delete: {
      color: "tomato",
      border: "1px solid",
      borderColor: "black.600",
      _hover: {
        bgColor: "black.400",
      },
      _active: {
        bgColor: "black.600",
      },
    },

    favorite: {
      fontSize: "2xl",
      color: "yellow.300",
      border: "1px solid",
      borderColor: "black.600",
      _hover: {
        bgColor: "black.300",
      },
      aspectRatio: "1",
    },
  },
  defaultProps: {
    colorScheme: "teal",
  },
};

export { Button };
