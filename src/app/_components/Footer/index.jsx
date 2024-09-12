import styles from './index.module.css';
import Logo from '@/app/_components/Logo';
import {
  github,
  qiita,
  twitter,
  facebook,
} from '@/app/_constants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_border}>
        <div className={styles.footer_container}>
          <ul
            className={
              styles.footer_cotainer__iconbox
            }
          >
            <Logo logo={github} />
            <Logo logo={facebook} />
            <Logo logo={qiita} />
            <Logo logo={twitter} />
          </ul>
          <small
            className={
              styles.footer_container__copy
            }
          >
            &copy;NAKAG&apos;s DIARY 2024
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
