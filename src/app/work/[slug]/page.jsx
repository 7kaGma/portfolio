import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import styles from './page.module.css';
import ImageBox from '@/app/_components/ImageBox';
import Primarybtn from '@/app/_components/PrimaryBtn';
import Secondarybtn from '@/app/_components/SecondaryBtn';
import { getWorksDetail } from '@/app/_libs/client';
import { formatDate } from '@/app/_libs/utils';

export default async function Page({ params }) {
  const data = await getWorksDetail(params.slug);

  return (
    <>
      <section className={styles.detail}>
        <p
          className={cx(
            styles.detail_title,
            cinzel.className,
          )}
        >
          Work
        </p>
        <div className={styles.detail_container}>
          <div
            className={
              styles.detail_container__text
            }
          >
            <h1>{data.name}</h1>
            <p>{data.overview}</p>
            <ul>
              <li>
                公開日:{formatDate(data.date)}
              </li>
              <li>制作期間:{data.period}</li>
              <li>使用技術:{data.techniques}</li>
            </ul>
            <div
              className={
                styles.detail_container__btn
              }
            >
              <Primarybtn
                url={data.git}
                text={'Githubを閲覧'}
              />
              <Primarybtn
                url={data.deploy}
                text={'作品を閲覧'}
              />
            </div>
          </div>
          <div
            className={
              styles.detail_container__Image
            }
          >
            <ImageBox
              image={data.image}
              name={data.name}
            />
          </div>
        </div>
      </section>
      <Secondarybtn url='/work' text='一覧' />
    </>
  );
}
