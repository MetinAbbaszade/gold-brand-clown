export interface CartSeedItem {
	productId: number;
	quantity: number;
}

export const cartSeedItems: CartSeedItem[] = [
	{ productId: 1, quantity: 1 },
	{ productId: 4, quantity: 2 },
	{ productId: 9, quantity: 1 },
];
