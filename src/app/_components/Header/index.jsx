import Link from "next/link";
import styles from './index.module.css';

const index = () => {
  return( 
  <header className={styles.header}>
    <div className={styles.header_container}>
      <Link href="/" className={styles.header_container__logo}>
      </Link>
    {/* {Menu/} */}
    </div>
  </header>);
};

export default index;
