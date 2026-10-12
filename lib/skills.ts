import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconBrandAngular, IconBrandJavascript, IconBrandNodejs, IconBrandPhp, IconBrandReact, IconBrandTypescript, IconCode, IconDeviceMobile, IconProps, IconServer, IconSettings } from "@tabler/icons-react";

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
      "APIs": IconCode,
      "PHP": IconBrandPhp,
      "SQL": IconServer,
      "Node.js": IconBrandNodejs,
      "Express.js": IconServer,
    },
  },
  {
    title: "Mobile",
    icon: IconDeviceMobile,
    skills: {
      "Ionic": IconDeviceMobile,
      "Capacitor": IconDeviceMobile,
    },
  },
  {
    title: "Engineering",
    icon: IconSettings,
    skills: {
      "Architecture": IconSettings,
      "Performance": IconSettings,
      "Accessibility": IconSettings,
      "Testing": IconSettings,
    },
  },
];