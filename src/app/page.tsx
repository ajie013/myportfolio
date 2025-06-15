'use client';

import Image from "next/image";
import pic from "@/assets/grad-pic-edited.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="px-4 md:px-6 max-w-4xl mx-auto flex flex-col items-center text-center text-primary-text pt-10 md:pt-16">
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 rounded-full overflow-hidden w-[150px] h-[150px] md:w-[190px] md:h-[190px] border-2 border-primary shadow"
            >
                <Image
                    src={pic}
                    alt="Aljon Gemida"
                    width={190}
                    height={190}
                    className="object-cover object-center w-full h-full"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
            >
                Hi! I’m Aljon 👋
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base md:text-lg leading-relaxed max-w-2xl mb-6"
            >
                I’m a passionate <span className="font-semibold text-secondary-text">Full-Stack Web Developer</span> who enjoys building clean, efficient, and user-friendly web applications.
            </motion.p>

           
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex text-sm md:text-lg gap-3"
            >
                <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-text flex items-center gap-2 px-5 py-2"
                >
                    <Link
                        href="https://www.linkedin.com/in/aljon-gemida"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin size={18} />
                        LinkedIn
                    </Link>
                </Button>

                <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-text flex items-center gap-2 px-5 py-2"
                >
                    <Link
                        href="/resume.pdf"
                        download="Aljon-Gemida-Resume.pdf"
                        rel="noopener noreferrer"
                    >
                        <Download size={18} />
                        Resume
                    </Link>
                </Button>
            </motion.div>
        </main>
    );
}
