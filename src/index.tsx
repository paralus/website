import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      light: "#08B09C",
      medium: "#0E4459",
      dark: "#1A202C",
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
