import CategoryItem, { Category } from '../category-item/category-item';
import styles from './directory.module.css';

export interface DirectoryProperties {
  categories: Category[];
}

export function Directory({ categories }: DirectoryProperties): JSX.Element {
  return (
    <div className={styles['directory-container']}>
      {categories.map(category => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
}

export default Directory;
