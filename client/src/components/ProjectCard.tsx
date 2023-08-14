import { Link2Icon } from "@radix-ui/react-icons";
import { Button, Link } from "@radix-ui/themes";
import React from "react";

type ProjectCardProps = {
  projectSkills: string;
  projectTitle: string;
  projectDescr: React.ReactNode;
  projectImg: string;
  link?: string;
};

export default function ProjectCard({
  projectSkills,
  projectTitle,
  projectDescr,
  projectImg,
  link,
}: ProjectCardProps) {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-900 dark:border-2 dark:border-slate-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex flex-col max-w-sm">
        <div className="md:shrink-0 flex items-center justify-center p-5">
          <img
            className="h-48 w-full object-cover rounded-3xl"
            src={`/${projectImg}.png`}
            alt="projectThumbnail"
          />
        </div>
        <div className="p-8">
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline"
          >
            {projectTitle}
          </a>
          <div className="mt-1 uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">
            {projectSkills}
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-300">
            {projectDescr}
          </p>
          {link && (
            <Link href={link} target="_blank">
              <Button color="violet" variant="solid" highContrast mt="4">
                <Link2Icon width="16" height="16" /> Open
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
