'use client';

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
    const education = [
        {
            level: "Tertiary Level",
            degree: "Bachelor of Science in Information Technology",
            institution: "Asian College of Technology",
            location: "Cebu, Philippines",
            duration: "2021 – 2025",
            description: ["Magna Cum Laude", "GPA: 1.35", "Consistent Dean's Lister"]
        },
        {
            level: "Secondary Level (Senior High)",
            institution: "CBD College Inc.",
            location: "Cebu, Philippines",
            duration: "2019 – 2021",
            description: []
        },
        {
            level: "Secondary Level (Junior High)",
            institution: "CBD College Inc.",
            location: "Cebu, Philippines",
            duration: "2015 – 2019",
            description: []
        },
        {
            level: "Primary Level",
            institution: "San Roque Elementary School",
            location: "Cebu, Philippines",
            duration: "2009 – 2015",
            description: []
        }
    ];

    return (
        <main className="relative px-4 sm:px-6 max-w-5xl mx-auto text-secondaryText">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary-text mb-16">
                Education
            </h1>

         

            <div className="space-y-15 md:space-y-20 relative z-10">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col md:flex-row md:items-center"
                    >
                        {/* Card with animation */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={`w-full md:w-1/2 px-4 ${
                                index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                            }`}
                        >
                            <div className="hover:shadow-primary bg-foreground rounded-xl shadow-md p-6">
                                <p className="text-sm uppercase font-medium text-secondary-text mb-1">
                                    {edu.level}
                                </p>
                                {edu.degree && (
                                    <p className="text-base text-primary-text italic mb-2">
                                        {edu.degree}
                                    </p>
                                )}
                                <p className="text-sm text-primary-text">
                                    {edu.institution} — {edu.location}
                                </p>
                                <p className="text-sm text-primary-text mb-2">{edu.duration}</p>

                                {edu.description.length > 0 && (
                                    <ul className="list-disc list-inside text-sm text-primary-text space-y-1">
                                        {edu.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-12 h-12 mt-6 md:mt-0 md:absolute left-1/2 md:-translate-x-1/2 z-10 bg-background border border-muted rounded-full  items-center justify-center shadow-md hidden md:flex"
                        >
                            <GraduationCap className="w-6 h-6 text-primary " />
                        </motion.div>
                    </div>
                ))}
            </div>
        </main>
    );
}
