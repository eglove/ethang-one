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
  total: number;
};

type CartContextType = {
  addItemToCart: (productToAdd: ProductType) => void;
  cartState: CartState;
  clearItemFromCart: (itemToRemove: CartItemType) => void;
  removeItemFromCart: (productToRemove: CartItemType) => void;
  setCartState: Dispatch<SetStateAction<CartState>>;
};

// @ts-expect-error Initialized in provider
export const CartContext = createContext<CartContextType>({
  cartState: { cartCount: 0, cartItems: [], isCartOpen: false, total: 0 },
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

const removeCartItem = (
  cartState: CartState,
  productToRemove: CartItemType
): CartState => {
  const existingCartItem = cartState.cartItems.find(cartItem => {
    return cartItem.id === productToRemove.id;
  });
  const quantity = existingCartItem?.quantity;

  if (quantity === 1) {
    return immutableSet<CartState, ProductType[]>(
      cartState,
      'cartItems',
      cartState.cartItems.filter(cartItem => {
        return cartItem.id !== productToRemove.id;
      })
    );
  }

  if (
    typeof existingCartItem !== 'undefined' &&
    typeof quantity === 'number' &&
    quantity > 1
  ) {
    return immutableSet<CartState, CartItemType[]>(cartState, 'cartItems', [
      ...cartState.cartItems.filter(cartItem => {
        return cartItem.id !== productToRemove.id;
      }),
      {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      },
    ]);
  }

  return cartState;
};

export const clearCartItem = (
  cartState: CartState,
  cartItemToRemove: CartItemType
): CartState => {
  return immutableSet<CartState, CartItemType[]>(
    cartState,
    'cartItems',
    cartState.cartItems.filter(cartItem => {
      return cartItem.id !== cartItemToRemove.id;
    })
  );
};

export function CartProvider({
  children,
}: CartProviderProperties): JSX.Element {
  const [cartState, setCartState] = useState<CartState>({
    cartCount: 0,
    cartItems: [],
    isCartOpen: false,
    total: 0,
  });

  useEffect(() => {
    const newCartCount = cartState.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);

    setCartState(cartState_ => {
      return immutableSet(cartState_, 'cartCount', newCartCount);
    });
  }, [cartState.cartItems]);

  useEffect(() => {
    const newCartTotal = cartState.cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);

    setCartState(cartState_ => {
      return immutableSet(cartState_, 'total', newCartTotal);
    });
  }, [cartState.cartItems]);

  const value = useMemo(() => {
    const addItemToCart = (product: ProductType): void => {
      setCartState(addCartItem(cartState, product));
    };

    const removeItemFromCart = (cartItem: CartItemType): void => {
      setCartState(removeCartItem(cartState, cartItem));
    };

    const clearItemFromCart = (cartItem: CartItemType): void => {
      setCartState(clearCartItem(cartState, cartItem));
    };

    return {
      addItemToCart,
      cartState,
      clearItemFromCart,
      removeItemFromCart,
      setCartState,
    };
  }, [cartState]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
