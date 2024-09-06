import styles from './page.module.css';
import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Image from 'next/image';

export default function Page() {
  return (
    <section className={styles.profile}>
      <h1 className={cx(styles.profile_title, cinzel.className)}>Profile</h1> 
          <div className={styles.profile_container}>
            <div className={styles.profile_container__image}>
              <Image 
                src="/profile.jpg"
                alt='Keroの写真'
                  width={900}
                  height={1200}
                  priority
              />
            </div>
            <div className={styles.profile_container__text}>
              <h2>NAKAG</h2>
              <dl>
                <dt>Personal history</dt>
                <dd>
                  1997年東京都に生まれる。
                  <br />
                  青山学院大学文学部日本文学科卒。
                  <br />
                  大学卒業後は、眼鏡販売店の店員やアニメ制作会社の営業職として働く。
                  <br />
                  仕事でWebサイトの更新作業を行ったのをきっかけに、Webサイト制作に興味を持ち、2023年9月にデジタルハリウッド東京本校本科UI/UX専攻に入学。
                  <br />
                </dd>
                <dt>Future vision</dt>
                <dd></dd>
                <dt>Techniques I've used</dt>
                <dd>
                  HTML/CSS/Sass/TailwindCSS/JavaScript/jQuery/React/Next.js/Three.js/Laravel/Flutter/Unity/MySQL/MicroCMS/Firebase
                </dd>
              </dl>
            </div>
          </div>
    </section>
  );
}
