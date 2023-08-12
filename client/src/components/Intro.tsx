import { Avatar, Card, Flex, Text, Box } from "@radix-ui/themes";
// import React from "react";

export default function Intro() {
  return (
    <Card>
      <Flex
        gap="6"
        align="center"
        justify="center"
        className="w-screen border-2 border-blue-500 h-64"
      >
        <Avatar
          size="8"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="8" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="5" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
