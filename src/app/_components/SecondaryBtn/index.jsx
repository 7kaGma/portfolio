'use client';
import Link from 'next/link';
import styles from './index.module.css';
import { useState } from 'react';
import cx from "classnames";


const Secondarybtn = ({ text, url }) => {
  const [onMouse,setState]=useState(false);
  const hover= ()=>{
    setState(!onMouse);
  }
  return (
    <>
      <Link
        onMouseEnter={hover}
        onMouseLeave={hover}
        className={cx(
          styles.link,
          onMouse ? styles.hoverBtn : '',
        )}
        href={url}
      >
        {text}に戻る
      </Link>
    </>
  );
};

export default Secondarybtn;
