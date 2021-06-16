import React, { useState } from "react";
import Layout from "./layout";
import {
  Stack,
  Flex,
  HStack,
  Heading,
  Text,
  Box,
  Button
} from "@chakra-ui/react";
import { AnimatedButton } from "./animated-button";
import { motion, AnimateSharedLayout } from "framer-motion";

const AFlex = motion(Flex);
const AStack = motion(Stack);

const badges = [
  "Olá - (Portuguese)",
  "Hola - (Spanish)",
  "Zdravstvuyte - (Russian)",
  "Nǐn hǎo - (Chinese)",
  "Salve - (Italian)",
  "Konnichiwa - (Japanese)",
  "Yassas - (Greek)",
  "Anyoung haseyo - (Korean)",
  "Bonjour - (French)",
  "Asalaam alaikum (Peace be upon you) - (Arabic)",
  "Goddag - (Danish)",
  "Shikamoo - (Swahili)",
  "Goedendag - (Dutch)",
  "Guten Tag - (German)",
  "Dzień dobry - (Polish)",
  "Selamat siang - (Indonesian)",
  "Namaste, Namaskar - (Hindi)",
  "Merhaba - (Turkish)"
];

// const sortByString = (a: string,b: string) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;

export const HomePage = (props: any) => {
  const [shouldCollapseAll, setShouldCollapseAll] = useState(false);
  const toggleShouldCollapseAll = (e) =>
    setShouldCollapseAll(!shouldCollapseAll);
  const [isEnd, setIsEnd] = useState(false);
  
  const [shouldSortItems, setShouldSortItems] = useState(false)
  const toggleShouldSortItems = (e) =>
  setShouldSortItems(!shouldSortItems);

  const itemComponents = badges.map((e, idx) => ({
      key: e,
      component: <AnimatedButton
        layout
        expanded={!shouldCollapseAll}
        text={e}
        style={{ marginTop: 10, marginLeft: 10 }}
        key={e}
      />
    }
  ))

  return (
    <Layout>
      <Stack align="flex-start">
        <Button
          // onClick={() => setIsEnd(!isEnd)}
          onClick={toggleShouldSortItems}
          variant={shouldCollapseAll ? "solid" : "outline"}
        >
          {shouldCollapseAll ? "show" : "hide"}
        </Button>
        <AnimateSharedLayout>
          <AFlex
            layout
            flexWrap="wrap"
            width="full"
            style={{
              justifyContent: isEnd ? "flex-end" : "flex-start"
            }}
          >
            {shouldSortItems
            ? itemComponents.sort((a,b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0).map(e => e.component)
            : itemComponents.map(e => e.component)
            }
          </AFlex>
        </AnimateSharedLayout>
        {Array(10)
          .fill(0)
          .map((e, idx) => (
            <Box key={idx} style={{ marginTop: "25vh" }}>
              <Heading as="h1">Title</Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </Box>
          ))}
      </Stack>
    </Layout>
  );
};
