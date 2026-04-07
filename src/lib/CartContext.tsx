"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";

export interface CartItem {
  productId: number;
  name: string;
  price: string;
  image: string;
  size: string;
  quantity: number;
}

type Action =
  | { type: "ADD"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE"; productId: number; size: string }
  | { type: "SET_QTY"; productId: number; size: string; qty: number };

function reducer(items: CartItem[], action: Action): CartItem[] {
  const key = (id: number, size: string) => `${id}::${size}`;
  switch (action.type) {
    case "ADD": {
      const k = key(action.payload.productId, action.payload.size);
      const exists = items.find(i => key(i.productId, i.size) === k);
      if (exists) {
        return items.map(i => key(i.productId, i.size) === k ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE":
      return items.filter(i => !(i.productId === action.productId && i.size === action.size));
    case "SET_QTY":
      if (action.qty <= 0) return items.filter(i => !(i.productId === action.productId && i.size === action.size));
      return items.map(i => i.productId === action.productId && i.size === action.size ? { ...i, quantity: action.qty } : i);
  }
}

const Ctx = createContext<{
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">) => void;
  remove: (id: number, size: string) => void;
  setQty: (id: number, size: string, qty: number) => void;
  count: number;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const count = items.reduce((s, i) => s + i.quantity, 0);
  return (
    <Ctx.Provider value={{
      items,
      add: (p) => dispatch({ type: "ADD", payload: p }),
      remove: (id, size) => dispatch({ type: "REMOVE", productId: id, size }),
      setQty: (id, size, qty) => dispatch({ type: "SET_QTY", productId: id, size, qty }),
      count,
    }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
