import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconAccessible, IconBrandAngular, IconBrandCss3, IconBrandGolang, IconBrandHtml5, IconBrandJavascript, IconBrandMongodb, IconBrandMysql, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrandReactNative, IconBrandSass, IconBrandTailwind, IconBrandTypescript, IconCode, IconDeviceMobile, IconProps, IconServer, IconSettings, IconSql, IconTestPipe } from "@tabler/icons-react";

export type SkillIcon = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

export type SkillGroup = {
  title: string;
  icon: SkillIcon;
  skills: Record<string, SkillIcon>;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: IconCode,
    skills: {
      HTML: IconBrandHtml5,
      CSS: IconBrandCss3,
      Tailwind: IconBrandTailwind,
      Sass: IconBrandSass,
      JavaScript: IconBrandJavascript,
      TypeScript: IconBrandTypescript,
      React: IconBrandReact,
      "Next.js": IconCode,
      Remix: IconCode,
      Angular: IconBrandAngular,
    },
  },
  {
    title: "Full-stack",
    icon: IconServer,
    skills: {
      "REST APIs": IconCode,
      "Node.js": IconBrandNodejs,
      "Express.js": IconServer,
      "PHP": IconBrandPhp,
      "Go": IconBrandGolang,
      "MySQL": IconBrandMysql,
      "PostgreSQL": IconSql,
      "MongoDB": IconBrandMongodb,
    },
  },
  {
    title: "Mobile",
    icon: IconDeviceMobile,
    skills: {
      "Ionic": IconDeviceMobile,
      "Capacitor": IconDeviceMobile,
      "React Native": IconBrandReactNative,
      "Expo": IconDeviceMobile,
    },
  },
  {
    title: "Engineering",
    icon: IconSettings,
    skills: {
      "Architecture": IconSettings,
      "Performance": IconSettings,
      "Accessibility": IconAccessible,
      "Testing": IconTestPipe,
    },
  },
];