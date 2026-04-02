import { Grid, Stack, Typography } from "@mui/material";
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
import type { Product } from "@/components/allPages/ProductPageComponent";

export const metadata: Metadata = { title: "Product Details" };

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const { id } = await params;
	const product: Product | undefined = await getProductById(Number(id));

	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			sx={{ width: "100%", overflowX: "hidden" }}
		>
			{/* Main product section */}
			<Stack
				sx={{
					mx: "auto",
					width: { xs: "92%", sm: "88%", md: "75%", lg: "65%" },
				}}
			>
				<Typography
					sx={{ padding: "20px 0", fontSize: "16px", color: "#888888" }}
				>
					Home / Products / {product?.name}
				</Typography>
				<Stack sx={{ m: { xs: "10px 0", md: "20px 0 30px" } }}>
					<ProductDetailPage product={product} />
				</Stack>
				<ProductTabs product={product} />
			</Stack>

			{/* You may also like */}
			<Stack
				bgcolor="#f5f5f5"
				sx={{ padding: { xs: "30px 0 20px", md: "50px 0 30px" } }}
			>
				<Typography
					alignSelf="center"
					mb="40px"
					sx={{ fontSize: { xs: "20px", md: "28px" } }}
				>
					You may also Like
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, sm: 3 }}
					sx={{
						width: { xs: "92%", sm: "88%", md: "75%", lg: "65%" },
						mx: "auto",
					}}
				>
					{product?.relatedProducts.map(async (relatedId: number) => {
						const relatedProduct = await getProductById(relatedId);
						return (
							<Grid key={relatedId} size={{ xs: 12, sm: 6, md: 4 }}>
								<ProductCard product={relatedProduct} />
							</Grid>
						);
					})}
				</Grid>
			</Stack>

			{/* Recently Viewed */}
			<Stack sx={{ padding: { xs: "30px 0 20px", md: "50px 0 40px" } }}>
				<Typography
					alignSelf="center"
					mb="40px"
					sx={{ fontSize: { xs: "20px", md: "28px" } }}
				>
					Recently Viewed
				</Typography>
				<Grid
					container
					spacing={{ xs: 2, sm: 3 }}
					sx={{
						width: { xs: "92%", sm: "88%", md: "75%", lg: "65%" },
						mx: "auto",
					}}
				>
					{product?.recentlyViewed.map(async (viewedId: number) => {
						const viewedProduct = await getProductById(viewedId);
						return (
							<Grid key={viewedId} size={{ xs: 12, sm: 6, md: 4 }}>
								<ProductCard product={viewedProduct} />
							</Grid>
						);
					})}
				</Grid>
			</Stack>

			<CollectionFooter />
		</MotionStack>
	);
};

export default page;
