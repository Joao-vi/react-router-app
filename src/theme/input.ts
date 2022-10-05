import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Input: ComponentStyleConfig = {
  baseStyle: {
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
};

export { Input };
