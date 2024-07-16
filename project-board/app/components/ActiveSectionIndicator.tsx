"use client";

import { useState, useEffect } from "react";
import styles from "./ActiveSectionIndicator.module.css";

export function ActiveSectionIndicator() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.indicator}>
      <div
        className={`${styles.dot} ${
          activeSection === "about" ? styles.active : ""
        }`}
      ></div>
      <div
        className={`${styles.dot} ${
          activeSection === "skills" ? styles.active : ""
        }`}
      ></div>
      <div
        className={`${styles.dot} ${
          activeSection === "projects" ? styles.active : ""
        }`}
      ></div>
      <div
        className={`${styles.dot} ${
          activeSection === "contact" ? styles.active : ""
        }`}
      ></div>
    </div>
  );
}
