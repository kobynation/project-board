"use client";

import { useState, useEffect } from "react";
import styles from "./Projects.module.css";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: "professional" | "academic" | "personal";
};

const projects: Project[] = [
  {
    id: 1,
    title: "John Deere Web Application",
    description:
      "Designed and developed a web application for equipment monitoring and management using React and Node.js.",
    technologies: ["React", "Node.js", "AWS", "Jenkins"],
    category: "professional",
  },
  {
    id: 2,
    title: "C Programming Course Management System",
    description:
      "Created a system to manage assignments and grades for the C programming course I TA'd.",
    technologies: ["C", "Python", "MySQL"],
    category: "academic",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "Developed this portfolio website using Next.js and modern web technologies.",
    technologies: ["Next.js", "React", "TypeScript", "CSS Modules"],
    category: "personal",
  },
  // Add more projects...
];

export function Projects() {
  const [filter, setFilter] = useState<
    "all" | "professional" | "academic" | "personal"
  >("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.filters}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("professional")}>Professional</button>
        <button onClick={() => setFilter("academic")}>Academic</button>
        <button onClick={() => setFilter("personal")}>Personal</button>
      </div>
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.technologies}>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
