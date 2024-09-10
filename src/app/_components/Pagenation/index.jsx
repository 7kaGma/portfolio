import React from 'react';
import { Work_List_Limit } from '@/app/_constants';
import Link from 'next/link';
import styles from './index.module.css';

const Pagenation = ({ totalCount }) => {
  //Array.fromで 配列の作成
  const pages = Array.from(
    {
      length: Math.ceil(
        totalCount / Work_List_Limit,
      ),
    },
    (_, i) => i + 1,
  );

  return (
    <ul className={styles.container}>
      {pages.map((p) => {
        return(
          <li
          className={styles.list}
          key={p}
        >
          <Link href={`/work/p/${p}`} className={styles.list__number}>
            {p}
          </Link>
        </li>
        );
      })
      }
    </ul>
  );
};

export default Pagenation;
