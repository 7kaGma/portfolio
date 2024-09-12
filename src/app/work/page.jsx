import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Secondarybtn from '../_components/SecondaryBtn';
import Worklist from '../_components/Worklist';
import { getWorks } from '../_libs/client';
import styles from './page.module.css';
import { Work_List_Fields } from '../_constants';
import { Work_List_Limit } from '../_constants';
import { Work_List_Orders } from '../_constants';
import Pagenation from '../_components/Pagenation';

export default async function Page() {
  const data = await getWorks({
    orders: Work_List_Orders,
    fields: Work_List_Fields,
    limit: Work_List_Limit,
    offset: 0,
  });

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
          <Pagenation totalCount={data.totalCount}/>
        </div>
        
      </section>
      <Secondarybtn url='/' text='ホーム' />
    </>
  );
}
