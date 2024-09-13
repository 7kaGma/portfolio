import cx from 'classnames';
import {
  Work_List_Fields,
  Work_List_Limit,
  Work_List_Orders,
} from '../_constants';
import { getWorks } from '../_libs/client';
import styles from './page.module.css';
import Pagenation from '@/app/_components/Pagenation';
import Secondarybtn from '@/app/_components/SecondaryBtn';
import Worklist from '@/app/_components/Worklist';
import { cinzel } from '@/font';

export default async function Page() {
  const data = await getWorks({
    orders: Work_List_Orders,
    fields: Work_List_Fields,
    limit: Work_List_Limit,
    offset: 0,
  });

  console.log(data);

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
          />
        </div>
      </section>
      <Secondarybtn url='/' text='ホーム' />
    </>
  );
}
