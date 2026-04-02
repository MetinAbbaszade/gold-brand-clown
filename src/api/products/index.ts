import { products } from "@/store/products";

export async function getAllProducts() {
	return products;
}

export async function getProductById(id: number) {
	const data = products.find((product) => product.id === id);
	return data;
}
