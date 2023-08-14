import { Grid } from "@radix-ui/themes";
import Item from "./Item";
import Projects from "./Projects";

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
          <>Bachelor of Engineering @ Ontario Tech University (Spring 2022)</>
        }
      />
      <Item
        title="Experience 💼"
        description={
          <>
            Software Engineering Intern @ League
            <br />
            Software Engineering Intern @ Ontario Power Generation
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
          <>Making tech-related content @regularyscheduledprogramming.</>
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
