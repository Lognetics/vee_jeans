'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Product } from '@/lib/types';

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  slug: string;
}

interface CartCtx {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQty: (productId: string, size: string, color: string, qty: number) => void;
  clear: () => void;
  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    try {
      const c = localStorage.getItem('vj-cart');
      const w = localStorage.getItem('vj-wishlist');
      if (c) setItems(JSON.parse(c));
      if (w) setWishlist(JSON.parse(w));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('vj-cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('vj-wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  const value = useMemo<CartCtx>(
    () => ({
      items,
      totalItems: items.reduce((s, i) => s + i.quantity, 0),
      subtotal: items.reduce((s, i) => s + i.quantity * i.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      addItem: (product, size, color, quantity = 1) => {
        setItems((prev) => {
          const idx = prev.findIndex(
            (i) => i.productId === product.id && i.size === size && i.color === color
          );
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
            return next;
          }
          return [
            ...prev,
            {
              productId: product.id,
              name: product.name,
              image: product.images[0],
              price: product.price,
              size,
              color,
              quantity,
              slug: product.slug,
            },
          ];
        });
        setIsOpen(true);
      },
      removeItem: (productId, size, color) => {
        setItems((prev) =>
          prev.filter(
            (i) => !(i.productId === productId && i.size === size && i.color === color)
          )
        );
      },
      updateQty: (productId, size, color, qty) => {
        setItems((prev) =>
          prev.map((i) =>
            i.productId === productId && i.size === size && i.color === color
              ? { ...i, quantity: Math.max(1, qty) }
              : i
          )
        );
      },
      clear: () => setItems([]),
      wishlist,
      toggleWishlist: (productId) =>
        setWishlist((prev) =>
          prev.includes(productId)
            ? prev.filter((p) => p !== productId)
            : [...prev, productId]
        ),
    }),
    [items, isOpen, wishlist]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
