"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiShadcnui,
  SiGit,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiDrizzle,
} from "react-icons/si";
import ScrollVelocity from "./ui/ScrollVelocity";
import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="center-nav mx-auto">
      <div className="text-white mt-16 md:mt-20 lg:mt-24 font-semibold space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">
          {t("skills.title")}{" "}
          <span className="blue-color border-r-3 pr-2">
            {t("skills.title.highlight")}
          </span>
        </h2>

        <div className="mt-8 md:mt-10 lg:mt-12">
          <ScrollVelocity
            items={[
              <SiReact key="react" className="text-[#61DAFB]" />,
              <SiNextdotjs key="next" className="text-white" />,
              <SiTailwindcss key="tailwind" className="text-[#06B6D4]" />,
              <SiJavascript key="js" className="text-[#F7DF1E]" />,
              <SiTypescript key="ts" className="text-[#3178C6]" />,
              <SiNodedotjs key="node" className="text-[#339933]" />,
              <SiShadcnui
                key="shadcn"
                className="text-white bg-black rounded-full p-1"
              />,
              <SiGit key="git" className="text-[#F05032]" />,
              <SiPrisma key="prisma" className="text-white" />,
              <SiDrizzle key="drizzle" className="text-white" />,
              <SiPostgresql key="postgresql" className="text-[#31648C]" />,
              <SiMongodb key="mongodb" className="text-[#47A248]" />,
              <SiGithub key="github" className="text-white" />,
            ]}
            velocity={100}
            iconClassName="size-10 md:size-14 lg:size-16"
            itemsGap="gap-8 md:gap-12 lg:gap-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
