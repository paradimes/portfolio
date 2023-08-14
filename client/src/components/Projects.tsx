import React from "react";
import projectJSON from "../Projects.json";
import { Flex, Heading, Text, Grid } from "@radix-ui/themes";
import ProjectCard from "./ProjectCard";

interface ProjectData {
  [key: string]: {
    projectTitle: string;
    projectDescr: string;
    projectSkills: string;
    projectImg: string;
    projectLink: string;
  };
}

type ProjectsProps = {
  title: string;
  description: React.ReactNode;
};

export default function Projects({ title, description }: ProjectsProps) {
  return (
    <Flex
      // width="100%"
      p="5"
      direction="column"
      gap="3"
      className=" rounded-3xl hover:bg-slate-200 dark:hover:bg-slate-800  py-5"
    >
      <Heading size="8" className="text-black dark:text-white">
        {title}
      </Heading>
      <Text size="4" className="text-black dark:text-white">
        {description}
      </Text>
      <Grid columns="2" gap="5" py="5">
        {Object.keys(projectJSON).map((projectKey) => {
          const project = projectJSON[projectKey] as ProjectData[string];
          return (
            <ProjectCard
              key={projectKey}
              projectSkills={project.projectSkills}
              projectTitle={project.projectTitle}
              projectDescr={project.projectDescr}
              projectImg={project.projectImg}
              link={project.projectLink}
            />
          );
        })}
      </Grid>
    </Flex>
  );
}
