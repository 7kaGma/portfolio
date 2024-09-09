import styles from "./index.module.css";
import Image from "next/image";

const ImageBox=({image,name})=>{
  return(
    <div className={styles.container}>
      <div className={styles.container__sub}>
      <Image
        className={styles.container__img}
        src={image.url}
        alt={name}
        width={image.width}
        height={image.height}
        priority
      />
      </div>
    </div>
  );
};

export default ImageBox;