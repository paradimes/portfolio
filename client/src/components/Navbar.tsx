import { Avatar, Flex, Link as RadixLink, Text } from "@radix-ui/themes";
import globe from "../assets/globe.svg";

export default function Navbar() {
  return (
    <Flex
      direction="row"
      gap="5"
      align="center"
      justify="center"
      className="bg-black"
    >
      <Flex gap="3" align="center" justify="center" width="100%">
        <Avatar size="1" src={globe} fallback="globe" />{" "}
        <Text weight="bold" className="text-white">
          Anas Mohmand
        </Text>
      </Flex>
      <Flex pr="9" direction="row" align="center" justify="center" width="100%">
        <RadixLink
          href="https://www.linkedin.com/in/anas-mohmand-2202b8172/"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          linkedin
        </RadixLink>
        <RadixLink
          href="https://github.com/paradimes"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          github
        </RadixLink>{" "}
        <RadixLink
          href="https://twitter.com/projectanas"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          twitter
        </RadixLink>{" "}
      </Flex>
    </Flex>
  );
}
