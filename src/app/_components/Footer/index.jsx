import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

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
            <li>
              <Link
                href='https://github.com/7kaGma'
                target='_blank'
              >
                <Image
                  src='/github_logo.svg'
                  alt='git_logo'
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </li>
            <li>
              <Link
                href='https://www.facebook.com/profile.php?id=61558376931429'
                target='_blank'
              >
                <Image
                  src='/facebook_logo.svg'
                  alt='facebook_logo'
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </li>
            <li>
              <Link
                href='https://qiita.com/Madao_2306'
                target='_blank'
              >
                <Image
                  src='/qiita_logo.svg'
                  alt='Qiita_logo'
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </li>
            <li>
              <Link
                href='https://x.com/Kero_forStudyP'
                target='_blank'
              >
                <Image
                  src='/x_logo.svg'
                  alt='x_logo'
                  width={30}
                  height={30}
                  priority
                />
              </Link>
            </li>
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
