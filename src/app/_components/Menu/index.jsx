'use client'
import Link from "next/link";
import cx from "classnames";
import { useState } from "react";
import styles from "./index.module.css";

const Menu = () => {
  const [isOpen,setState]=useState(false);
  const toggleOpen =()=>{
    setState(!isOpen);
  };
  const open =()=>StereoPannerNode(true)
  return (
    <>
      <nav className={cx(styles.nav,isOpen?styles.activeNav:'')}>
        <ul className={styles.nav_container}>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/work">Work</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <button className={cx(styles.btn,isOpen?styles.active:'')} onClick={toggleOpen}>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Menu;
