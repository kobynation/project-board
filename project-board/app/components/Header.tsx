"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Your Name
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <a href="#about" onClick={handleScroll}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleScroll}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleScroll}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleScroll}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
