import { products } from "@/store/products";
import fetchDelay from "../delay";

export async function getAllProducts() {
	await fetchDelay();
	if (!products) {
		return "not found";
	}

	return products;
}

export async function getProductById(id: number) {
	const data = products.find((product) => product.id === id);
	return data;
}
