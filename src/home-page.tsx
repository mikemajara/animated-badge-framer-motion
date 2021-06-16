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
  {
    title: "Olá - (Portuguese)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Hola - (Spanish)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Zdravstvuyte - (Russian)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Nǐn hǎo - (Chinese)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Salve - (Italian)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Konnichiwa - (Japanese)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Yassas - (Greek)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Anyoung haseyo - (Korean)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Bonjour - (French)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Asalaam alaikum (Peace be upon you) - (Arabic)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Goddag - (Danish)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Shikamoo - (Swahili)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Goedendag - (Dutch)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Guten Tag - (German)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Dzień dobry - (Polish)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Selamat siang - (Indonesian)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Namaste, Namaskar - (Hindi)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
  {
    title: "Merhaba - (Turkish)",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
  },
];



// const sortByString = (a: string,b: string) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;

export const HomePage = (props: any) => {
  const [shouldCollapseAll, setShouldCollapseAll] = useState(false);
  const toggleShouldCollapseAll = () =>
    setShouldCollapseAll(!shouldCollapseAll);
  const [isEnd, setIsEnd] = useState(false);
  
  const [shouldSortItems, setShouldSortItems] = useState(false)
  const toggleShouldSortItems = () =>
    setShouldSortItems(!shouldSortItems);

  const itemComponents = badges.map((e, idx) => ({
      key: e,
      component: <AnimatedButton
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
          onClick={toggleShouldCollapseAll}
          variant={shouldCollapseAll ? "solid" : "outline"}
        >
          {shouldCollapseAll ? "show" : "hide"}
        </Button>
        <AnimateSharedLayout>
          <AFlex
            layout
            flexWrap="wrap"
            width="full"
            flexDir="row"
          >
            {
              badges.map((e, idx) => {
                return <AnimatedButton
                  layout
                  expanded={!shouldCollapseAll}
                  text={e.title}
                  content={e.content}
                  style={{ marginTop: 10, marginLeft: 10 }}
                  key={e}
                />
              })
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
