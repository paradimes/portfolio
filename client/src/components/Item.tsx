import { Flex, Heading, Text } from "@radix-ui/themes";

type ItemProps = {
  title: string;
  description: React.ReactNode;
};

export default function Item({ title, description }: ItemProps) {
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

      <Text size="4" className="text-black dark:text-white">
        {description}
      </Text>
    </Flex>
  );
}
