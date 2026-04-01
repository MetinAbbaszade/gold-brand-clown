import fetchDelay from "../delay";

export async function getAllProducts() {
	await fetchDelay();
	const data = await fetch("http://localhost:4000/products");
	if (!data) {
		return "not found";
	}
	const jsonFormat = await data.json();

	return jsonFormat;
}

export async function getProductById(id: number) {
	const data = await fetch(`http://localhost:4000/products?id=${id}`);
	if (!data) {
		return "not found";
	}
	const jsonFormat = await data.json();

	return jsonFormat;
}
