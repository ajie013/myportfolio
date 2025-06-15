'use client';

import { imagesData } from "@/utils/images";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

interface Skill {
    name: string;
    icon?: string;
}

export default function SkillsPage() {
    const backendSkills: Skill[] = [
        { name: "Node.js", icon: imagesData.nodejs },
        { name: "Express.js", icon: imagesData.express },
        { name: "Prisma", icon: imagesData.prisma },
        { name: "C#", icon: imagesData.csharp }
    ];

    const databaseSkills: Skill[] = [
        { name: "MongoDB", icon: imagesData.mongodb },
        { name: "MySQL", icon: imagesData.mysql },
        { name: "MsSQL", icon: imagesData.sqlserver }
    ];

    const frontendSkills: Skill[] = [
        { name: "HTML", icon: imagesData.html },
        { name: "CSS", icon: imagesData.css },
        { name: "JavaScript", icon: imagesData.javascript },
        { name: "TypeScript", icon: imagesData.typescript },
        { name: "React.js", icon: imagesData.reactjs },
        { name: "React Native", icon: imagesData.reactnative },
        { name: "Next.js", icon: imagesData.next },
        { name: "Tailwind CSS", icon: imagesData.tailwind },
        { name: "Bootstrap", icon: imagesData.bootstrap }
    ];

    const toolsAndTechnologies: Skill[] = [
        { name: "Git", icon: imagesData.git },
        { name: "GitHub", icon: imagesData.github },
        { name: "Postman", icon: imagesData.postman },
        { name: "Photoshop", icon: imagesData.photoshop },
        { name: "Figma", icon: imagesData.figma },
        { name: "Visual Studio Code", icon: imagesData.vscode },
        { name: "Visual Studio", icon: imagesData.visualstudio }
    ];

    const sectionVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const containerVariant: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <main className="mx-auto max-w-5xl px-4 text-primary-text">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-3xl md:text-4xl font-bold mb-10"
            >
                Skills
            </motion.h1>

            {renderSkills("Frontend", frontendSkills, sectionVariant, containerVariant)}
            {renderSkills("Backend", backendSkills, sectionVariant, containerVariant)}
            {renderSkills("Databases", databaseSkills, sectionVariant, containerVariant)}
            {renderSkills("Tools & Technologies", toolsAndTechnologies, sectionVariant, containerVariant)}
        </main>
    );
}

function renderSkills(
    title: string,
    skills: Skill[],
    sectionVariant: Variants,
    containerVariant: Variants
) {
    return (
        <motion.section
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 text-center"
        >
            <h2 className="inline-block text-xl font-semibold text-primary-text border-b-2 border-b-primary">
                {title}
            </h2>
            <motion.div
                variants={containerVariant}
                className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-5"
            >
                {skills.map((skill, index) => (
                    <SkillsCard key={index} skill={skill} />
                ))}
            </motion.div>
        </motion.section>
    );
}

const SkillsCard = ({ skill }: { skill: Skill }) => {
    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={cardVariant}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col-reverse items-center justify-center gap-1 rounded-lg bg-foreground text-center font-medium text-primary-text shadow transition-shadow hover:shadow-lg hover:shadow-primary p-2 w-[130px] h-[80px] md:w-[180px] md:h-[120px] md:p-4"
        >
            <p className="tracking-wider text-sm md:text-base">{skill.name}</p>
            <Image
                src={skill.icon || "null"}
                alt={skill.name}
                className="object-contain size-8 md:size-12"
            />
        </motion.div>
    );
};
