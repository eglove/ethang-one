import { useContext } from 'react';

import { ProductCard } from '../../components/product-card/product-card';
import { ProductsContext } from '../../contexts/products-context';
import styles from './shop.module.css';

export function Shop(): JSX.Element {
  const { products } = useContext(ProductsContext);

  return (
    <div className={styles['ProductsContainer']}>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
