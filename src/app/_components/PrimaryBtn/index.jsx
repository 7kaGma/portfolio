import Link from "next/link";
import styles from "./index.module.css";

const Primarybtn =({text,url})=>{
  return(
    <>
      <Link 
      className={styles.link}
      href={url}
      target='_blank'
      >
        {text}
      </Link>
    </>
  )
}

export default Primarybtn;