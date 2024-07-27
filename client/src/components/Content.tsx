import { Flex, Grid, Link } from "@radix-ui/themes";
import Item from "./Item";
import Projects from "./Projects";
import profilePicture from "../assets/profilePicture.jpeg";

export default function Content() {
  return (
    <Grid className="w-11/12 md:w-11/12 lg:w-[1000px] gap-4 sm:gap-16 p-4 sm:p-16 bg-white dark:bg-slate-900 grid-cols-1 sm:grid-cols-2 ">
      <Item
        title="Welcome 👋"
        description={
          <>
            My name is Anas. I'm an Engineer. I love learning + building.
            Looking for my next opportunity to build something great.
          </>
        }
      />
      <Flex className="flex justify-center items-center">
        <img
          src={profilePicture}
          className="w-40 h-40 rounded-full object-fill hover:outline hover:outline-4 hover:outline-offset-4  hover:outline-slate-300 dark:hover:outline-slate-300 	"
        />
      </Flex>
      <Item
        title="Education 🎓"
        description={
          <>
            Bachelor of Mechanical Engineering @{" "}
            <Link href={"https://ontariotechu.ca/"} target="_blank">
              Ontario Tech University
            </Link>{" "}
            (June 2022)
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
            React, TypeScript, JavaScript, Python, NodeJS, PostgreSQL, MongoDB,
            AWS, Tailwind CSS, Git, Figma{" "}
          </>
        }
      />
      <Item
        title="YouTube 🎥"
        description={
          <>
            Creating tech-related content
            <Link
              href={
                "https://www.youtube.com/@regularlyscheduledprogramming./featured"
              }
              target="_blank"
            >
              {" "}
              @regularyscheduledprogramming.
            </Link>
          </>
        }
        link="https://www.youtube.com/@regularlyscheduledprogramming./featured"
      />
      <div className="col-span-1 sm:col-span-2">
        <Projects title="Projects" description="My personal projects." />
      </div>
    </Grid>
  );
}
