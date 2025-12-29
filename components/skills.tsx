// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import Image from "next/image"

// // Patrones de diseño para cada categoría
// const patterns = {
//   Frontend: [2, 2, 2],
//   Backend: [2, 2, 2],
//   Herramientas: [2, 2, 2],
// }

// const techCategories = [
//   {
//     title: "Frontend",
//     color: "text-blue-600 dark:text-blue-400",
//     bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
//     technologies: [
//       { name: "HTML5", img: "/logos/html5.webp" },
//       { name: "CSS3", img: "/logos/css3.webp" },
//       { name: "JavaScript", img: "/logos/javascript.webp" },
//       { name: "React", img: "/logos/react.webp" },
//       { name: "TypeScript", img: "/logos/typescript.webp" },
//       { name: "Angular", img: "/logos/angular.webp" },
//       { name: "Dart", img: "/logos/dart.webp" },
//       { name: "Flutter", img: "/logos/flutter.webp" },
//       { name: "Tailwind CSS", img: "/logos/tailwind.webp" },
//       { name: "SASS", img: "/logos/sass.webp" },
//       { name: "Bootstrap", img: "/logos/boostrap.webp" },
//       { name: "React Native", img: "/logos/reactnative.webp" },
//     ],
//     pattern: patterns.Frontend,
//   },
//   {
//     title: "Backend",
//     color: "text-green-600 dark:text-green-400",
//     bgColor: "bg-green-500/10 dark:bg-green-500/20",
//     technologies: [
//       { name: "Node.js", img: "/logos/nodejs.webp" },
//       { name: "Express", img: "/logos/express.webp" },
//       { name: "MySQL", img: "/logos/mysql.webp" },
//       { name: "Sequelize", img: "/logos/sequelize.webp" },
//       { name: "Python", img: "/logos/python.webp" },
//       { name: "FastApi", img: "/logos/fastapi.webp" },
//       { name: "Java", img: "/logos/java.webp" },
//       { name: "Spring", img: "/logos/spring.webp" },
//     ],
//     pattern: patterns.Backend,
//   },
//   {
//     title: "Herramientas",
//     color: "text-purple-600 dark:text-purple-400",
//     bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
//     technologies: [
//       { name: "Git", img: "/logos/git.webp" },
//       { name: "Docker", img: "/logos/docker.webp" },
//       { name: "REST APIs", img: "/logos/restapi.webp" },
//       { name: "Socket.io", img: "/logos/socket.webp" },
//       { name: "AWS", img: "/logos/aws.webp" },
//       { name: "Firebase", img: "/logos/firebase.webp" },
//       { name: "Vite", img: "/logos/vite.webp" },
//       { name: "Figma", img: "/logos/figma.webp" },
//       { name: "Postman", img: "/logos/postman.webp" },
//       { name: "Expo Go", img: "/logos/expogo.webp" },
//     ],
//     pattern: patterns.Herramientas,
//   },
// ]

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// }

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// }

// // Función para obtener el tamaño de cada elemento
// const getSizeClass = (size: number) => {
//   switch (size) {
//     case 1:
//       return "w-16 h-16 md:w-20 md:h-20 text-[0.65rem] md:text-xs"
//     case 2:
//       return "w-20 h-20 md:w-28 md:h-28 text-[0.7rem] md:text-sm"
//     case 3:
//       return "w-24 h-24 md:w-36 md:h-36 text-xs md:text-sm"
//     default:
//       return "w-16 h-16 md:w-24 md:h-24 text-[0.65rem] md:text-xs"
//   }
// }

// interface Technology {
//   name: string
//   img: string
// }

// interface TechCarouselProps {
//   technologies: Technology[]
//   pattern: number[]
// }

// const TechCarousel = ({ technologies, pattern }: TechCarouselProps) => {
//   // Duplicamos las tecnologías para crear un efecto de bucle infinito
//   const duplicatedTechnologies = [...technologies, ...technologies]

//   // Dividimos las tecnologías en 3 filas para crear un efecto de mosaico
//   const rows: Technology[][] = [[], [], []]
//   duplicatedTechnologies.forEach((tech, index) => {
//     const rowIndex = index % 3
//     rows[rowIndex].push(tech)
//   })

//   return (
//     <div className="relative overflow-hidden rounded-xl h-75 sm:h-87.5 md:h-112.5">
//       <div className="absolute top-0 left-0 w-8 md:w-16 h-full bg-linear-to-r from-background to-transparent z-10"></div>
//       <div className="absolute top-0 right-0 w-8 md:w-16 h-full bg-linear-to-l from-background to-transparent z-10"></div>

//       <div className="flex flex-col h-full">
//         {rows.map((rowTechs, rowIdx) => (
//           <div
//             key={`row-${rowIdx}`}
//             className="flex animate-scroll-horizontal h-1/3"
//           >
//             {rowTechs.map((tech, index) => {
//               const sizeIndex = (index + rowIdx) % pattern.length
//               const size = pattern[sizeIndex]
//               const sizeClass = getSizeClass(size)

//               return (
//                 <div
//                   key={`${tech.name}-${rowIdx}-${index}`}
//                   className={`shrink-0 flex flex-col items-center justify-center p-2 md:p-3 m-1 md:m-2 rounded-xl transition-all duration-300 hover:scale-[1.03] group bg-muted/50 hover:bg-muted border border-border ${sizeClass}`}
//                 >
//                   <div className="w-1/2 sm:w-3/5 h-1/2 sm:h-3/5 flex items-center justify-center mb-1 md:mb-2 relative">
//                     <Image
//                       src={tech.img}
//                       alt={tech.name}
//                       fill
//                       className="object-contain group-hover:scale-110 transition-transform duration-200"
//                       onError={(e) => {
//                         e.currentTarget.style.opacity = "0.5"
//                       }}
//                     />
//                   </div>
//                   <span className="font-medium text-center text-foreground line-clamp-1">
//                     {tech.name}
//                   </span>
//                 </div>
//               )
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export function Skills() {
//   return (
//     <section id="skills" className="py-20 px-4 bg-muted/30">
//       <div className="container mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
//           <div className="w-24 md:w-32 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Technologies I master and use in my projects
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {techCategories.map((category) => (
//             <motion.div key={category.title} variants={item}>
//               <div className="space-y-6">
//                 <div className="text-center">
//                   <span
//                     className={`inline-block px-6 py-3 rounded-full text-base font-semibold ${category.color} ${category.bgColor}`}
//                   >
//                     {category.title}
//                   </span>
//                 </div>

//                 <Card className="hover:shadow-lg transition-shadow">
//                   <CardContent className="p-6">
//                     <TechCarousel
//                       technologies={category.technologies}
//                       pattern={category.pattern}
//                     />
//                   </CardContent>
//                 </Card>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes scroll-horizontal {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-scroll-horizontal {
//           animation: scroll-horizontal 40s linear infinite;
//           display: flex;
//           width: max-content;
//           flex-wrap: wrap;
//           align-content: flex-start;
//           height: 100%;
//         }

//         .animate-scroll-horizontal:hover {
//           animation-play-state: paused;
//         }

//         @media (max-width: 768px) {
//           .animate-scroll-horizontal {
//             animation-duration: 25s;
//           }

//           .animate-scroll-horizontal > div {
//             margin: 0.125rem 0.25rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .animate-scroll-horizontal {
//             animation-duration: 20s;
//           }
//         }
//         `,
//         }}
//       />
//     </section>
//   )
// }

"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { skillsData } from "@/lib/skills-data";
import { SkillBadge } from "./ui/skill-badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Habilidades y Tecnologías
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un conjunto completo de herramientas para construir aplicaciones web modernas y escalables
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 items-stretch"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={item} className="flex">
              <BackgroundGradient
                className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col"
                animate={false}
              >
                <h3 className={`text-2xl font-bold mb-6 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 flex-1 content-start">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 0.15 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
