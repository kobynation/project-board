"use client";

import styles from "./Skills.module.css";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "Java", level: 85 },
  { name: "C", level: 90 },
  { name: "Python", level: 80 },
  { name: "C#", level: 75 },
  { name: "C++", level: 70 },
  { name: "AWS", level: 85 },
  { name: "Full Stack Development", level: 90 },
  { name: "Jenkins", level: 80 },
  { name: "GitHub", level: 85 },
  { name: "CI/CD", level: 80 },
];

export function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <h3>{skill.name}</h3>
            <div className={styles.skillBar}>
              <div
                className={styles.skillLevel}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
