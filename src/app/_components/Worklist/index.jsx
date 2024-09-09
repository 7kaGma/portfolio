import Link from 'next/link';
import ImageBox from '../ImageBox';
import Tag from '../Tag';
import styles from './index.module.css';

const Worklist = ({ data }) => {
  if (data.contents.length === 0) {
    return <p>準備中です</p>;
  }

  console.log(data.contents[0].image);
  return (
    <ul className={styles.container}>
      {data.contents.map((article) => (
        <li
          className={styles.list}
          key={article.id}
        >
          <Link href={`/work/${article.id}`}>
            <ImageBox
              image={article.image}
              name={article.name}
            />
            <dl>
              <dt>{article.name}</dt>
              <Tag category={article.category} />
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Worklist;
