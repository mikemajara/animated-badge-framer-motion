import React from "react";
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
  "Bonjour - (French)",
  "Hola - (Spanish)",
  "Zdravstvuyte - (Russian)",
  "Nǐn hǎo - (Chinese)",
  "Salve - (Italian)",
  "Konnichiwa - (Japanese)",
  "Guten Tag - (German)",
  "Olá - (Portuguese)",
  "Anyoung haseyo - (Korean)",
  "Asalaam alaikum (Peace be upon you) - (Arabic)",
  "Goddag - (Danish)",
  "Shikamoo - (Swahili)",
  "Goedendag - (Dutch)",
  "Yassas - (Greek)",
  "Dzień dobry - (Polish)",
  "Selamat siang - (Indonesian)",
  "Namaste, Namaskar - (Hindi)",
  "Merhaba - (Turkish)"
];

export const HomePage = (props: any) => {
  const [shouldCollapseAll, setShouldCollapseAll] = React.useState(false);
  const toggleShouldCollapseAll = (e) =>
    setShouldCollapseAll(!shouldCollapseAll);

  const [isEnd, setIsEnd] = React.useState(false);
  return (
    <Layout>
      <Stack align="flex-start">
        <Button
          onClick={() => setIsEnd(!isEnd)}
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
            {badges.map((e, idx) => (
              <AnimatedButton
                layoutId="item"
                expanded={!shouldCollapseAll}
                text={e}
                style={{ marginTop: 10, marginLeft: 10 }}
              />
            ))}
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
