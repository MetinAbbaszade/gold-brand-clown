import { collections } from "@/store/collections";
import fetchDelay from "../delay";

export async function getAllCollections() {
	await fetchDelay();

	if (!collections) {
		return null;
	}
	return collections;
}
