import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_border}>
        <div className={styles.footer_container}>
          <ul className={styles.footer_cotainer__iconbox}>
            <li>
              <Link href="https://github.com/7kaGma" target="_blank">
                <Image 
                  src="/github_logo.svg"
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </li> 
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61558376931429" target="_blank">
                <Image 
                  src="/facebook_logo.svg"
                  alt="facebook_logo"
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </li> 
            <li>
              <Link href="https://x.com/Kero_forStudyP" target="_blank">
                <Image 
                  src="/x_logo.svg"
                  alt="x_logo"
                  width={30}
                  height={30}
                  priority
                />
              </Link>
            </li> 
          </ul>
          <small className={styles.footer_container__copy}>&copy;KERO'S DIARY 2024</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
