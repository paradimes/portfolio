import { Button, Grid, Link } from "@radix-ui/themes";
import Item from "./Item";
import Projects from "./Projects";
import { Link2Icon } from "@radix-ui/react-icons";

export default function Content() {
  return (
    <Grid
      columns="2"
      gap="9"
      p="9"
      className="w-[1000px] bg-white dark:bg-slate-900"
    >
      <Item
        title="Welcome 👋"
        description={<>My name is Anas. I'm a Software Engineer.</>}
      />
      <br />
      <Item
        title="Education 🎓"
        description={
          <>
            Bachelor of Engineering @{" "}
            <Link href={"https://ontariotechu.ca/"} target="_blank">
              Ontario Tech University
            </Link>{" "}
            (Spring 2022)
          </>
        }
      />
      <Item
        title="Experience 💼"
        description={
          <>
            Software Engineering Intern @{" "}
            <Link href={"https://league.com/"} target="_blank">
              League
            </Link>
            <br />
            Software Engineering Intern @{" "}
            <Link href={"https://www.opg.com/"} target="_blank">
              Ontario Power Generation
            </Link>
          </>
        }
      />
      <Item
        title="Skills 🛠️"
        description={
          <>
            React, TypeScript, JavaScript, Python, Node.JS, Tailwind CSS, Git,
            Figma{" "}
          </>
        }
      />
      <Item
        title="YouTube 🎥"
        description={
          <>
            Making tech-related content
            <Link> @regularyscheduledprogramming.</Link>
            <Link
              href={
                "https://www.youtube.com/@regularlyscheduledprogramming./featured"
              }
              target="_blank"
            >
              <Button color="violet" variant="solid" highContrast mt="4">
                <Link2Icon width="16" height="16" /> Open
              </Button>
            </Link>
          </>
        }
      />
      <div className="col-span-2">
        <Projects
          title="Projects"
          description="Personal projects I've worked on."
        />
      </div>
    </Grid>
  );
}
