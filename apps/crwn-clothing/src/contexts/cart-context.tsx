import { immutableSet } from '@ethang/util-typescript';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ProductType } from './products-context';

export type CartItemType = ProductType & {
  quantity: number;
};

export type CartState = {
  cartCount: number;
  isCartOpen: boolean;
  cartItems: CartItemType[];
};

type CartContextType = {
  addItemToCart: (productToAdd: ProductType) => void;
  cartState: CartState;
  setCartState: Dispatch<SetStateAction<CartState>>;
};

// @ts-expect-error Initialized in provider
export const CartContext = createContext<CartContextType>({
  cartState: { cartCount: 0, cartItems: [], isCartOpen: false },
});

interface CartProviderProperties {
  children: JSX.Element | JSX.Element[];
}

const addCartItem = (
  cartState: CartState,
  productToAdd: ProductType
): CartState => {
  const existingCartItem = cartState.cartItems.find(cartItem => {
    return cartItem.id === productToAdd.id;
  });

  if (typeof existingCartItem !== 'undefined') {
    return immutableSet<CartState, CartItemType[]>(
      cartState,
      'cartItems',
      cartState.cartItems.map(cartItem => {
        if (cartItem.id === productToAdd.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }

        return cartItem;
      })
    );
  }

  return immutableSet<CartState, CartItemType[]>(cartState, 'cartItems', [
    ...cartState.cartItems,
    {
      ...productToAdd,
      quantity: 1,
    },
  ]);
};

export function CartProvider({
  children,
}: CartProviderProperties): JSX.Element {
  const [cartState, setCartState] = useState<CartState>({
    cartCount: 0,
    cartItems: [],
    isCartOpen: false,
  });

  useEffect(() => {
    const newCartCount = cartState.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setCartState(cartState_ => {
      return immutableSet(cartState_, 'cartCount', newCartCount);
    });
  }, [cartState.cartItems]);

  const value = useMemo(() => {
    const addItemToCart = (product: ProductType): void => {
      setCartState(addCartItem(cartState, product));
    };

    return { addItemToCart, cartState, setCartState };
  }, [cartState]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
