import cx from 'classnames';
import { notFound } from 'next/navigation';
import Pagenation from '@/app/_components/Pagenation';
import Secondarybtn from '@/app/_components/SecondaryBtn';
import Worklist from '@/app/_components/Worklist';
import {
  Work_List_Limit,
  Work_List_Fields,
  Work_List_Orders,
} from '@/app/_constants';
import { getWorks } from '@/app/_libs/client';
import styles from '@/app/work/page.module.css';
import { cinzel } from '@/font';

export default async function Page({ params }) {
  const current = parseInt(params.current, 10);

  const data = await getWorks({
    orders: Work_List_Orders,
    fields: Work_List_Fields,
    limit: Work_List_Limit,
    offset: Work_List_Limit * (current - 1),
  });

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  return (
    <>
      <section className={styles.work}>
        <h1
          className={cx(
            styles.work_title,
            cinzel.className,
          )}
        >
          Works
        </h1>
        <div className={styles.work_container}>
          <Worklist data={data} />
          <Pagenation
            totalCount={data.totalCount}
            current={current}
          />
        </div>
      </section>
      <Secondarybtn url='/' text='ホーム' />
    </>
  );
}
