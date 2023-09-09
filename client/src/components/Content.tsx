import { Button, Grid, Link } from "@radix-ui/themes";
import Item from "./Item";
import Projects from "./Projects";
import { Link2Icon } from "@radix-ui/react-icons";

export default function Content() {
  return (
    <Grid className="w-11/12 md:w-11/12 lg:w-[1000px] gap-4 sm:gap-16 p-4 sm:p-16 bg-white dark:bg-slate-900 grid-cols-1 sm:grid-cols-2 ">
      <Item
        title="Welcome 👋"
        description={
          <>
            My name is Anas. I'm a Software Engineer. I love learning +
            building. Looking for my next opportunity to build something great.
          </>
        }
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
      <div className="col-span-1 sm:col-span-2">
        <Projects
          title="Projects"
          description="Personal projects I've worked on."
        />
      </div>
    </Grid>
  );
}
