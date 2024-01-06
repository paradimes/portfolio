import { Link2Icon } from "@radix-ui/react-icons";
import { Button, Flex, Heading, Link, Text } from "@radix-ui/themes";

type ItemProps = {
  title: string;
  description: React.ReactNode;
  link?: string;
};

export default function Item({ title, description, link }: ItemProps) {
  return (
    <Flex
      p="5"
      direction="column"
      gap="3"
      className="col-span-1 max-w-lg rounded-3xl hover:bg-slate-200 dark:hover:bg-slate-800 "
    >
      <Heading size="8" className="text-black dark:text-white">
        {title}
      </Heading>

      <Text size="4" className="text-black dark:text-white text-left">
        {description}
      </Text>

      {link && (
        <Link href={link} target="_blank">
          <Button color="violet" variant="solid" highContrast mt="4">
            <Link2Icon width="16" height="16" /> Open
          </Button>
        </Link>
      )}
    </Flex>
  );
}
