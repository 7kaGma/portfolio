'use client';

import cx from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';

const Primarybtn = ({ text, url }) => {
  const [onMouse, setState] = useState(false);
  const hover = () => {
    setState(!onMouse);
  };
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
        target='_blank'
      >
        {text}
      </Link>
    </>
  );
};

export default Primarybtn;
