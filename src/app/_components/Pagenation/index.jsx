import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';
import { Work_List_Limit } from '@/app/_constants';

const Pagenation = ({
  totalCount,
  current = 1,
}) => {
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
    <div className={styles.pagenation}>
      <p>- Page -</p>
      <ul className={styles.container}>
        {pages.map((p) => {
          return (
            <li className={styles.list} key={p}>
              {current !== p ? (
                <Link
                  href={`/work/p/${p}`}
                  className={styles.list__number}
                >
                  {p}
                </Link>
              ) : (
                <span
                  className={styles.list__current}
                >
                  {p}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagenation;
