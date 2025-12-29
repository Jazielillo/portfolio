export interface Skill {
  name: string;
  logo: string;
  url: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        url: "https://www.typescriptlang.org/",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        url: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        url: "https://nextjs.org/",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
        url: "https://angular.io/",
      },
      {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        url: "https://tailwindcss.com/",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        url: "https://flutter.dev/",
      },
    ],
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org/",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        url: "https://expressjs.com/",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        url: "https://www.mysql.com/",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        url: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        url: "https://www.postgresql.org/",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        url: "https://www.prisma.io/",
      },
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        url: "https://spring.io/projects/spring-boot",
      },
    ],
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Tools & Other",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        url: "https://git-scm.com/",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        url: "https://www.docker.com/",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        url: "https://firebase.google.com/",
      },
      {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        url: "https://vercel.com/",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        url: "https://code.visualstudio.com/",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        url: "https://www.figma.com/",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        url: "https://www.postman.com/",
      },
    ],
    color: "text-slate-600 dark:text-slate-400",
  },
];

// Helper function to get skill data by name
export function getSkillByName(name: string): Skill | undefined {
  for (const category of skillsData) {
    const skill = category.skills.find(
      (s) => s.name.toLowerCase() === name.toLowerCase()
    );
    if (skill) return skill;
  }
  return undefined;
}

// Helper function to get multiple skills by names
export function getSkillsByNames(names: string[]): Skill[] {
  return names
    .map((name) => getSkillByName(name))
    .filter((skill): skill is Skill => skill !== undefined);
}
