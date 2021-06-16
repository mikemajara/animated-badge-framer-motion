import React from "react";
import {
  Text,
  Flex,
  Box,
  Stack,
  HStack,
  Button,
  IconButton,
  chakra
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const AButton = motion(Button);

export const AnimatedButton = (props) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid black",
    width: "auto",
    height: "40px",
    borderRadius: "10px"
  };

  return (
    <AButton
      {...props}
      onClick={toggleExpanded}
      style={{
        ...buttonStyle,
        ...props.style,
        paddingRight: isExpanded ? "16px" : "8px",
        borderRadius: "10px",
      }}
    >
      <SunIcon mr="2" />
      <motion.div
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap"
        }}
        animate={{
          width: isExpanded ? "auto" : 0
        }}
        transition={{ type: "spring", bounce: 0 }}
      >
        {props.text}
      </motion.div>
    </AButton>
  );
};
