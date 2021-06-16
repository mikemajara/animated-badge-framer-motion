import React from "react";
import {
  Flex,
  Stack,
  HStack,
  Heading,
  IconButton,
  Avatar
} from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import {
  useViewportScroll,
  useTransform,
  motion,
  useAnimation
} from "framer-motion";

const MotionFlex = motion(Flex);
const MotionAvatar = motion(Avatar);
const MotionHeading = motion(Heading);

export function Header() {
  const { scrollY } = useViewportScroll();
  const scrollYRange = [0, 100, 100];

  const motionValueScrollYFactory = (values: any[]) => {
    return useTransform(scrollY, scrollYRange, values);
  };

  const containerHeight = motionValueScrollYFactory(["100px", "60px", "60px"]);
  const imageSize = motionValueScrollYFactory(["60px", "30px", "30px"]);
  const fontSize = motionValueScrollYFactory(["3rem", "1.5rem", "1.5rem"]);
  const opacity = motionValueScrollYFactory([0, 1, 1]);
  const paddingHeaderX = motionValueScrollYFactory(["30px", "20px", "20px"]);

  // uncomment to check values
  // scrollY.onChange((val) => console.log(`useViewportScroll.y: ${val}`));

  const controls = useAnimation();
  const delta = React.useRef(0);
  const lastScrollY = React.useRef(0);
  scrollY.onChange((val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }

    // console.log(`val: ${val}`);
    // console.log(`delta: ${delta.current}`);
    // console.log(`lastScrollY: ${lastScrollY.current}`);

    if (delta.current >= 10 && val > 200) {
      controls.start("hidden");
    } else if (delta.current <= -10 || val < 200) {
      controls.start("visible");
    }
    lastScrollY.current = val;
  });

  return (
    <MotionFlex
      align="center"
      justify="space-between"
      bg="gray.200"
      position="fixed"
      w="full"
      initial="visible"
      animate={controls}
      variants={{
        visible: { top: "0px" },
        hidden: { top: "-100px" }
      }}
      // transition={{ duration: 1 }}
      style={{
        height: containerHeight,
        paddingLeft: paddingHeaderX,
        paddingRight: paddingHeaderX
      }}
    >
      <Stack direction="row" spacing="2" align="center">
        <MotionAvatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          style={{
            height: imageSize,
            width: imageSize
          }}
        />
        <HStack spacing="0">
          <MotionHeading
            as="h1"
            style={{
              fontSize
            }}
          >
            Mike
          </MotionHeading>
          <MotionHeading
            as="h1"
            style={{
              fontSize,
              opacity
            }}
          >
            's blog
          </MotionHeading>
        </HStack>
      </Stack>
      <IconButton aria-label="color-mode" icon={<SunIcon />} />
    </MotionFlex>
  );
}
