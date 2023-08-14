import { Flex, Link as RadixLink, Text } from "@radix-ui/themes";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
  MoonIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDarkActive, setIsDarkActive] = useState(false);

  const onSwitchTheme = () => {
    const htmlClassName = document.documentElement.classList;

    if (isDarkActive) {
      htmlClassName.remove("dark");
    } else {
      htmlClassName.add("dark");
    }

    setIsDarkActive(!isDarkActive);
  };

  useEffect(() => {
    const htmlClassName = document.documentElement.classList;
    setIsDarkActive(htmlClassName.contains("dark"));
  }, []);

  return (
    <Flex
      direction="row"
      gap="5"
      align="center"
      justify="center"
      className="bg-black"
    >
      <Flex
        gap="3"
        align="center"
        justify="center"
        width="100%"
        className="text-white"
      >
        {/* <Avatar size="1" src={globe} fallback="globe" /> */}
        <GlobeIcon />
        <Text weight="bold" className="text-white">
          Anas Mohmand
        </Text>
      </Flex>
      <Flex pr="9" direction="row" align="center" justify="center" width="100%">
        <RadixLink
          href="https://www.linkedin.com/in/anas-mohmand-2202b8172/"
          target="_blank"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          <Flex direction="row" align="center" justify="center" gap="1">
            <LinkedInLogoIcon />
            linkedin
          </Flex>
        </RadixLink>
        <RadixLink
          href="https://github.com/paradimes"
          target="_blank"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          <Flex direction="row" align="center" justify="center" gap="1">
            <GitHubLogoIcon />
            github
          </Flex>
        </RadixLink>{" "}
        <RadixLink
          href="https://twitter.com/projectanas"
          target="_blank"
          weight="bold"
          className="hover:bg-slate-600 px-2 text-white rounded-lg my-1"
        >
          <Flex direction="row" align="center" justify="center" gap="1">
            <TwitterLogoIcon />
            twitter
          </Flex>
        </RadixLink>{" "}
        <Flex
          align="center"
          justify="center"
          className="ml-5 px-2 py-1 my-1 hover:bg-white rounded-lg hover:cursor-pointer text-white hover:text-black "
          onClick={onSwitchTheme}
        >
          {isDarkActive ? <SunIcon /> : <MoonIcon />}
        </Flex>
        {/* </Button> */}
      </Flex>
    </Flex>
  );
}
