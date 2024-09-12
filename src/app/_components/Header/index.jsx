import cx from 'classnames';
import Link from 'next/link';
import Menu from '../Menu';
import styles from './index.module.css';
import { cinzel } from '@/font';

const index = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link
          href='/'
          className={cx(
            styles.header_container__logo,
            cinzel.className,
          )}
        >
          NAKAG&apos;s DIARY
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default index;
