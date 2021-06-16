import React, { useState } from "react";
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
import { sample } from 'lodash';

const AFlex = motion(Flex);
const ABox = motion(Box);
const AButton = motion(Button);
const AIcon = motion(Icon);

const colors = ["#e40303","#ff8c00","#ffed00","#008026","#004dff","#750787"]

export const AnimatedButton = (props: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [isContentShowing, setIsContentShowing] = useState(true);

  const toggleBackgroundColor = () => {
    setBackgroundColor(sample(colors)+"79" || "white")
  }

  const toggleContentShowing = () => {
    setIsContentShowing(!isContentShowing)
  }

  React.useEffect(() => {
    setIsExpanded(props.expanded);
  }, [props.expanded]);

  const textControls = useAnimation();

  const toggleExpanded = () => {
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
    flexDirection: "column",
    alignItems: "center",
    border: ".5px solid black",
    // width: "49%",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "white"
  };

  return (
    <ABox
      layout
      onClick={toggleContentShowing}
      // onDoubleClick={toggleContentShowing}
      onAuxClick={toggleBackgroundColor}
      style={{
        ...buttonStyle,
        ...props.style,
        paddingRight: isExpanded ? "16px" : "8px",
        height: "auto",
        // height: isContentShowing ? "40px" : "auto",
        borderRadius: "10px",
        backgroundColor,
      }}
    >
      {/* <Box
      onAuxClick>

      </Box> */}
      <AFlex align="center" justify="center">
        <AIcon layout mr="2" as={SunIcon}/>
        {/* <AnimatePresence> */}
          {isExpanded && <motion.div
          layout
          style={{
            overflowX: "hidden",
            whiteSpace: "nowrap"
          }}
          animate={{
            width: isExpanded ? "auto" : 0
          }}
        >
          {props.text}
        </motion.div>}
      </AFlex>
      <ABox>
        <AnimatePresence>
          {isContentShowing && <motion.div>props.content</motion.div>}
        </AnimatePresence>
      </ABox>
        {/* </AnimatePresence> */}
    </ABox>
  );
};
