import React from "react";
import { Header } from "./header";
import { chakra } from "@chakra-ui/react";

export default function Layout({
  children,
  home = false
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <body>
        <header>
          <Header />
        </header>
        <main>
          <chakra.div p="5" mt="100">
            {children}
          </chakra.div>
        </main>
      </body>
    </>
  );
}
