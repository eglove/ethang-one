import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import PRODUCTS from '../shop-data.json';

export type ProductType = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

interface IProductContext {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
}

// @ts-expect-error Will be initialized in provider
export const ProductsContext = createContext<IProductContext>();

interface ProductsProviderProperties {
  children: JSX.Element | JSX.Element[];
}

export function ProductsProvider({
  children,
}: ProductsProviderProperties): JSX.Element {
  const [products, setProducts] = useState<ProductType[]>(
    PRODUCTS as unknown as ProductType[]
  );

  const value = useMemo(() => {
    return { products, setProducts };
  }, [products]);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}
