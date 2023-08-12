import { Flex } from "@radix-ui/themes";
import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <Flex direction="column" className="h-screen ">
      <Navbar />
      <Flex
        direction="column"
        align="center"
        // justify="center"
        className="border-2 border-red-500 flex-grow"
      >
        <Intro />
      </Flex>
    </Flex>
  );
}
