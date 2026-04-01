import { mainCollections } from "@/store/mainCollections";
import fetchDelay from "../delay";

export async function getAllCollection() {
	await fetchDelay();
	if (!mainCollections) {
		return "not found";
	}

	return mainCollections;
}
