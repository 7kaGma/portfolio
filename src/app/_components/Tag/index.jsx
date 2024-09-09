import styles from './index.module.css';

const Tag = ({ category }) => {
  return <dd>{category.name}</dd>;
};

export default Tag;
