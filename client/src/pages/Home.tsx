import { Flex } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function Home() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");

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
