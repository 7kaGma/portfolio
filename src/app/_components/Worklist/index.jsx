"use client";
import Link from 'next/link';
import ImageBox from '../ImageBox';
import Tag from '../Tag';
import styles from './index.module.css';
import { no_image } from '@/app/_constants';
import { useState } from 'react';
import cx from "classnames";

const Worklist = ({ data }) => {
  const [onMouse,setState]= useState(null);
  const hover =(index)=> {
    setState(index);
  }
  const leave =()=>{
    setState(null)
  }

  if (data.contents.length === 0) {
    return <p>準備中です</p>;
  }

  return (
    <ul className={styles.container}>
      {data.contents.map((article,index) => (
        <li
          onMouseEnter={()=>hover(index)}
          onMouseLeave={leave}
          className={cx(styles.list,onMouse==index?styles.hoverBtn:'')}
          key={article.id}
        >
          <Link href={`/work/${article.id}`}>
            <ImageBox
              image={article.image ? article.image : no_image} 
              name={article.name}
            />
            <dl>
              <dt>{article.name}</dt>
              <Tag category={article.category} />
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Worklist;
