import type { Metadata } from "next";
import { getAllProducts } from "@/api/products";
import ProductPageComponent from "@/components/allPages/ProductPageComponent";

export const metadata: Metadata = {
	title: "Products",
};

const page = async () => {
	const datas = await getAllProducts();
	return <ProductPageComponent productDatas={datas} />;
};

export default page;
