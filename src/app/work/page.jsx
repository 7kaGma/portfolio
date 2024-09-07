import Worklist from '../_components/Worklist';
import { getWorks } from '../_libs/client';
import styles from './page.module.css';

export default async function Page() {
  const data = await getWorks();
  console.log(data);

  return (
    <section className={styles.work}>
      <Worklist data={data} />
    </section>
  );
}
