import { Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import { getProductById } from "@/api/products";
import CollectionFooter from "@/components/_common/CollectionFooter";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import ProductCard from "@/components/_common/ProductCard/ProductCard";
import ProductTabs from "@/components/_common/ProductTabs/ProductTabs";
import ProductDetailPage from "@/components/allPages/ProductDetailPage";

export const metadata: Metadata = {
	title: "Product Details",
};

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const { id } = await params;
	const [product] = await getProductById(id);
	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			width="100vw"
		>
			<Stack m="0 auto" width="65%">
				<Typography
					sx={{
						padding: "20px 0",
						fontSize: "16px",
						color: "#888888",
					}}
				>
					Home / Products / {product.name}
				</Typography>
				<Stack m={"20px 30px 30px 30px"}>
					<ProductDetailPage product={product} />
				</Stack>
				<ProductTabs product={product} />
			</Stack>
			<Stack bgcolor={"#f5f5f5"} padding={"50px 0 30px"}>
				<Typography alignSelf={"center"} mb={"40px"} fontSize={"28px"}>
					You may also Like
				</Typography>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					width={"65%"}
					margin={"0 auto"}
				>
					{product.relatedProducts.map(async (id: number) => {
						const [product] = await getProductById(id);
						return (
							<Stack key={Math.random()}>
								<ProductCard product={product} />
							</Stack>
						);
					})}
				</Stack>
			</Stack>
			<Stack padding={"50px 0 40px"}>
				<Typography alignSelf={"center"} mb={"40px"} fontSize={"28px"}>
					Recently Viewed
				</Typography>
				<Stack
					direction={"row"}
					justifyContent={"space-between"}
					width={"65%"}
					margin={"0 auto"}
				>
					{product.recentlyViewed.map(async (id: number) => {
						const [product] = await getProductById(id);
						return (
							<Stack key={Math.random()}>
								<ProductCard product={product} />
							</Stack>
						);
					})}
				</Stack>
			</Stack>
			<CollectionFooter />
		</MotionStack>
	);
};

export default page;
