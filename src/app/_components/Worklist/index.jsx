import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Tag from '../Tag';

const Worklist = ({ data }) => {
  if (data.contents.length === 0) {
    return <p>準備中です</p>;
  }
  return (
    <ul className={styles.container}>
      {data.contents.map((article) => (
        <li className={styles.list}key={article.id}>
          <div className={styles.image}>
            <Image
              className={styles.image__img}
              src={article.image.url}
              alt={article.name}
              width={600}
              height={450}
              priority
            />
          </div>
          <dl>
            <dt>{article.name}</dt>
            <Tag category={article.category} />
          </dl>
        </li>
      ))}
    </ul>
  );
};

export default Worklist;
