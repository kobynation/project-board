"use client";

import Image from "next/image";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          Hello! I'm a Computer Engineer graduate from Iowa State University,
          currently working as a Full Stack Engineer at John Deere. With a
          diverse background in IT support, teaching, and software development,
          I bring a unique blend of technical skills and practical experience to
          the table.
        </p>
        <p>
          My journey includes a year in IT Solutions at Iowa State, where I
          honed my problem-solving skills by addressing various IT issues for
          the university community. I then spent 1.5 years as a Teaching
          Assistant for Dr. Thomas Daniels, running lab hours, hosting office
          hours, and eventually leading my own classes in C programming.
        </p>
        <p>
          Now, with 1.5 years at John Deere, I've been designing and creating
          web applications, further expanding my expertise in full-stack
          development and deployment processes.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/coverphoto.jpg"
          alt="Your Name"
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
    </section>
  );
}
