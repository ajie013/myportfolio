'use client';

import { projectsImageData, imagesData } from '@/utils/images';
import { motion, type Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Tech {
    name: string;
    image?: StaticImageData;
}

interface Project {
    title: string;
    image: StaticImageData;
    techs: Tech[];
}

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            title: 'Furnira Commerce',
            image: projectsImageData.furnira,
            techs: [
                { name: 'React.js', image: imagesData.reactjs },
                { name: 'TypeScript', image: imagesData.typescript },
                { name: 'Node.js', image: imagesData.nodejs },
                { name: 'Express.js', image: imagesData.express },
                { name: 'MySQL', image: imagesData.mysql },
                { name: 'Tailwind CSS', image: imagesData.tailwind },
                { name: 'Stripe', image: projectsImageData.stripe },
            ],
        },
        {
            title: 'ChatHub',
            image: projectsImageData.chathhub,
            techs: [
                { name: 'React.js', image: imagesData.reactjs },
                { name: 'TypeScript', image: imagesData.typescript },
                { name: 'Node.js', image: imagesData.nodejs },
                { name: 'Express.js', image: imagesData.express },
                { name: 'MongoDB', image: imagesData.mongodb },
                { name: 'Tailwind CSS', image: imagesData.tailwind },
                { name: 'Socket.io', image: projectsImageData.socketio },
            ],
        },
        {
            title: 'Point-of-Sale System',
            image: projectsImageData.possytem,
            techs: [
                { name: 'React.js', image: imagesData.reactjs },
                { name: 'Node.js', image: imagesData.nodejs },
                { name: 'Express.js', image: imagesData.express },
                { name: 'MySQL', image: imagesData.mysql },
            ],
        },

    
        {
            title: 'My Portfolio',
            image: projectsImageData.myportfolio,
            techs: [
                { name: 'React.js', image: imagesData.reactjs },
                { name: 'Next.js', image: imagesData.next },
                { name: 'TypeScript', image: imagesData.typescript },
                { name: 'Tailwind CSS', image: imagesData.tailwind },
               
            ],
        },

    ];

    const sectionVariant: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const containerVariant: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-primary-text">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center text-3xl font-bold md:text-4xl text-primary-text"
            >
                My Projects
            </motion.h1>

            <motion.section
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-20"
            >
                <motion.div
                    variants={containerVariant}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} variants={cardVariant} />
                    ))}
                </motion.div>
            </motion.section>
        </main>
    );
}

function ProjectCard({
    project,
    variants,
}: {
    project: Project;
    variants: Variants;
}) {
    return (
        <motion.article
            variants={variants}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-2x1 bg-foreground  shadow-lg transition-shadow hover:shadow-lg hover:shadow-primary "
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    placeholder="blur"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="flex flex-col gap-4 px-5 py-4">
                <h3 className="text-lg md:text-xl font-semibold text-center text-primary-text">
                    {project.title}
                </h3>
                <div className="flex flex-wrap justify-center items-center gap-2">
                    {project.techs.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2 border border-[#00c89666]  bg-muted/30 px-3 py-1.5 rounded-md text-sm text-secondary-text shadow-lg"
                        >
                            <Image
                                src={tech.image || ''}
                                alt={tech.name}
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                            <span className='text-primary-text'> {tech.name}</span>
                           
                        </div>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}
