import React from "react";
import {
  Text,
  Flex,
  Box,
  Stack,
  HStack,
  Button,
  IconButton,
  chakra,
  Icon
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const AFlex = motion(Flex);
const ABox = motion(Box);
const AButton = motion(Button);
const AIcon = motion(Icon);

export const AnimatedButton = (props: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  React.useEffect(() => {
    setIsExpanded(props.expanded);
  }, [props.expanded]);

  const textControls = useAnimation();

  const toggleExpanded = (e) => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      textControls.start("expanded");
    } else {
      textControls.start("collapsed");
    }
  };

  const buttonStyle = {
    padding: "8px 16px",
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    border: ".5px solid black",
    // width: "49%",
    // height: "40px",
    borderRadius: "10px"
  };

  return (
    <ABox
      layout
      onClick={toggleExpanded}
      style={{
        ...buttonStyle,
        ...props.style,
        paddingRight: isExpanded ? "16px" : "8px",
        // height: isExpanded ? "40px" : "auto",
        height: "auto",
        borderRadius: "10px"
      }}
    >
      <AFlex>
        <AIcon layout mr="2" as={SunIcon} />
        <AnimatePresence>{isExpanded && <motion.div
          layout
          style={{
            overflowX: "hidden",
            whiteSpace: "nowrap"
          }}
        >
          {props.text}
        </motion.div>}
        </AnimatePresence>
      </AFlex>
      {/* <AnimatePresence>
        {isExpanded && <ABox>{props.content}</ABox>}
      </AnimatePresence> */}
    </ABox>
  );
};
