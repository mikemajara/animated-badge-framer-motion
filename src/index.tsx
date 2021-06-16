import { ChakraProvider, Heading } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { HomePage } from "./home-page";
import "./styles.css";

function App() {
  return <Heading>Welcome to Chakra + TS</Heading>;
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <HomePage />
  </ChakraProvider>,
  rootElement
);
