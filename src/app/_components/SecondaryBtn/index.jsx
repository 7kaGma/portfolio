import Link from 'next/link';
import styles from './index.module.css';

const Secondarybtn = ({ text, url }) => {
  return (
    <>
      <Link className={styles.link} href={url}>
        {text}に戻る
      </Link>
    </>
  );
};

export default Secondarybtn;
