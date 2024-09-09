import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Image from 'next/image';
import ImageBox from '../_components/ImageBox';
import Primarybtn from '../_components/PrimaryBtn';
import Secondarybtn from '../_components/SecondaryBtn';
import { getProfile } from '../_libs/client';
import styles from './page.module.css';

export default async function Page() {
  const data = await getProfile();
  return (
    <>
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
            <ImageBox
              image={data.image}
              name={data.introduction}
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
              <dt>Techniques</dt>
              <dd>{data.techniques}</dd>
              <dt>Tools</dt>
              <dd>{data.tools}</dd>
              <dt>Hobby</dt>
              <dd>{data.hobby}</dd>
            </dl>
          </div>
        </div>
      </section>
      <Secondarybtn url='/' text='ホーム' />
    </>
  );
}
