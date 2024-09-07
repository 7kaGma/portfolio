import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Image from 'next/image';
import styles from './page.module.css';
import { getProfile } from '../_libs/client';

export default async function Page() {
  const data = await getProfile();
  console.log(data);

  return (
    <section className={styles.profile}>
      <h1
        className={cx(
          styles.profile_title,
          cinzel.className,
        )}
      >
        Profile
      </h1>
      <div className={styles.profile_container}>
        <div
          className={
            styles.profile_container__image
          }
        >
          <Image
            src='/profile.jpg'
            alt='NAKAGの写真'
            width={900}
            height={1200}
            priority
          />
        </div>
        <div
          className={
            styles.profile_container__text
          }
        >
          <h2>NAKAG</h2>
          <p>{data.introduction}</p>
          <dl className={styles.explain}>
            <dt>Future vision</dt>
            <dd>{data.vision}</dd>
            <dt>Techniques I've used</dt>
            <dd>{data.techniques}</dd>
            <dt>Tools I've used</dt>
            <dd>{data.tools}</dd>
            <dt>Hobby</dt>
            <dd>{data.hobby}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
