import Link from 'next/link';
import styles from './index.module.css';
import { cinzel } from '@@/utils/font';
import cx from 'classnames';
import Menu from '../Menu';

const index = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link
          href='/'
          className={cx(styles.header_container__logo, cinzel.className)}
        >
          NAKAG's DIARY
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default index;
