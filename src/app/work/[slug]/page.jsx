import styles from "./page.module.css";
import { getWorksDetail } from "@/app/_libs/client";
import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import ImageBox from "@/app/_components/ImageBox";
import {formatDate} from "@/app/_libs/utils";
import Primarybtn from "@/app/_components/PrimaryBtn";
import Secondarybtn from "@/app/_components/SecondaryBtn";

export default async function Page({parameter}){
  
  const data = await getWorksDetail(parameter);
  const useData = data.contents[0];

  console.log(useData);

  return(
    <>
    <section className={styles.detail}>
      <p className={cx(
          styles.detail_title,
          cinzel.className,
      )}>
        Work
      </p>   
      <div className={styles.detail_container}>
        <div className={styles.detail_container__text}>
          <h1>{useData.name}</h1>
          <p>{useData.overview}</p>
          <ul>
            <li>公開日:{formatDate (useData.date)}</li>
            <li>制作期間:{useData.period}</li>
            <li>使用技術:{useData.techniques}</li>
          </ul>
          <div className={styles.detail_container__btn}>
            <Primarybtn url={useData.git} text={"Githubを閲覧"}/>
            <Primarybtn url={useData.deploy} text={"作品を閲覧"}/>
          </div>
          
        </div>
        <div className={styles.detail_container__Image}>
          <ImageBox 
            image={useData.image}
            name={useData.name}
          />
        </div>
      </div>
    </section>
    <Secondarybtn url="/work" text="一覧"/>
    </>
  );
}