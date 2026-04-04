"use client";

import { createContext, useEffect, useMemo, useState } from "react";
import { products } from "@/store/products";
import { cartSeedItems, type CartSeedItem } from "@/store/cart";

export interface CartItem extends CartSeedItem {
	name: string;
	collection: string;
	price: number;
	image: string;
}

interface CartContextType {
	cartItems: CartItem[];
	itemCount: number;
	subtotal: number;
	increaseQuantity: (productId: number) => void;
	decreaseQuantity: (productId: number) => void;
	removeFromCart: (productId: number) => void;
	clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

const STORAGE_KEY = "goldbrand-cart";

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartState, setCartState] = useState<CartSeedItem[]>([]);

	useEffect(() => {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			setCartState(cartSeedItems);
			return;
		}

		try {
			const parsed = JSON.parse(raw) as CartSeedItem[];
			setCartState(Array.isArray(parsed) ? parsed : cartSeedItems);
		} catch {
			setCartState(cartSeedItems);
		}
	}, []);

	useEffect(() => {
		if (cartState.length === 0) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(cartState));
	}, [cartState]);

	const cartItems = useMemo(() => {
		return cartState
			.map((item) => {
				const product = products.find(
					(product) => product.id === item.productId,
				);
				if (!product) return null;

				return {
					...item,
					name: product.name,
					collection: product.collection,
					price: product.price,
					image: product.images[0],
				};
			})
			.filter(Boolean) as CartItem[];
	}, [cartState]);

	const itemCount = useMemo(
		() => cartItems.reduce((sum, item) => sum + item.quantity, 0),
		[cartItems],
	);

	const subtotal = useMemo(
		() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[cartItems],
	);

	const increaseQuantity = (productId: number) => {
		setCartState((prev) =>
			prev.map((item) =>
				item.productId === productId
					? { ...item, quantity: item.quantity + 1 }
					: item,
			),
		);
	};

	const decreaseQuantity = (productId: number) => {
		setCartState((prev) =>
			prev
				.map((item) =>
					item.productId === productId
						? { ...item, quantity: Math.max(0, item.quantity - 1) }
						: item,
				)
				.filter((item) => item.quantity > 0),
		);
	};

	const removeFromCart = (productId: number) => {
		setCartState((prev) => prev.filter((item) => item.productId !== productId));
	};

	const clearCart = () => {
		setCartState([]);
		localStorage.removeItem(STORAGE_KEY);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				itemCount,
				subtotal,
				increaseQuantity,
				decreaseQuantity,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
