import { extendTheme } from "@chakra-ui/react";

import { Button } from "./button";
import { Text } from "./text";

const theme = extendTheme({
  colors: {
    black: {
      900: "#010100",
      800: "#181819",
      700: "#212021",
      600: "#2b2a2a",
      400: "#333233",
      300: "#363736",
    },
    gray: {
      400: "#a7a5a0",
    },
  },

  styles: {
    global: {
      "*::-webkit-scrollbar": {
        width: "10px",
      },
      "*::-webkit-scrollbar-track": {
        bgColor: "black.800",
      },
      "*::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
      },
      body: {
        fontFamily: "Inter, sans-serif",
        color: "white",
        bgColor: "black.800",
      },
      "html,body,#root": {
        height: "100%",
        minHeight: "100vh",
      },
      ul: {
        listStyle: "none",
      },
    },
  },

  components: {
    Button,
    Text
  },
});

export { theme };
