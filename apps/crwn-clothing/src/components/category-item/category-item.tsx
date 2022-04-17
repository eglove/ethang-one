import styles from './category-item.module.css';

export type Category = {
  id: number;
  imageUrl: string;
  title: string;
};

export interface CategoryItemProperties {
  category: Category;
}

export function CategoryItem({
  category,
}: CategoryItemProperties): JSX.Element {
  return (
    <div className={styles['category-container']}>
      <div
        className={styles['background-image']}
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className={styles['category-body-container']}>
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
