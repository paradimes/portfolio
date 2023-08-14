import { Flex } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Home() {
  return (
    <Flex direction="column" className="h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Flex
        direction="column"
        align="center"
        // justify="center"
        className="flex-grow bg-white dark:bg-slate-900"
      >
        <Content />
      </Flex>
    </Flex>
  );
}
