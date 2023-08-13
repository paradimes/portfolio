import { Grid } from "@radix-ui/themes";
import Item from "./Item";

export default function Content() {
  return (
    <Grid columns="2" gap="9" width="auto" p="9">
      <Item
        title="Welcome 👋"
        description="My name is Anas. I'm a Software Engineer."
      />
      <br />
      <Item
        title="Education 🎓"
        description="Bachelor of Engineering @ Ontario Tech University"
      />
      <Item
        title="Experience 💼"
        description={
          <>
            Software Engineering Intern @ League <br />
            Software Engineering Intern @ Ontario Power Generation
          </>
        }
      />
      <Item
        title="Projects 👨‍💻"
        description={
          <>
            Software Engineering Intern @ League <br />
            Software Engineering Intern @ Ontario Power Generation
          </>
        }
      />
      <Item
        title="YouTube 🎥"
        description={
          <>Making tech-related content @regularyscheduledprogramming.</>
        }
      />
    </Grid>
  );
}
