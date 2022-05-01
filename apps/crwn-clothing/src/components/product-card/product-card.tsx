import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import { ProductType } from '../../contexts/products-context';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button';
import styles from './product-card.module.css';

interface ProductCardProperties {
  product: ProductType;
}

export function ProductCard({ product }: ProductCardProperties): JSX.Element {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className={styles['ProductCardContainer']}>
      <img alt={product.name} src={product.imageUrl} />
      <div className={styles['Footer']}>
        <span className={styles['Name']}>{product.name}</span>
        <span className={styles['Price']}>{product.price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        buttonProperties={{
          onClick(): void {
            addItemToCart(product);
          },
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}
