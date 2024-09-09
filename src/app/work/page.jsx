import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Worklist from '../_components/Worklist';
import { getWorks } from '../_libs/client';
import styles from './page.module.css';
import Secondarybtn from '../_components/SecondaryBtn';

export default async function Page() {
  const data = await getWorks();
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
        <Worklist data={data} />
      </section>
      <Secondarybtn url="/" text="ホーム"/>
    </>
  );
}
