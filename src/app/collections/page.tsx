import CollectionsPage from "@/components/allPages/CollectionsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Collections",
};

const page = () => {
	return <CollectionsPage />;
};

export default page;
