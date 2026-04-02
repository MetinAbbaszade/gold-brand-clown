import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { ProductDetailPageProps } from "@/components/allPages/ProductDetailPage";

const ProductCard = ({ product }: ProductDetailPageProps) => {
	return (
		<Box
			sx={{
				width: "100%",
				boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
				transition: "all 0.3s ease",
				background: "#fff",
				borderRadius: "5px",
				overflow: "hidden",
				"&:hover": {
					transform: "translateY(-5px)",
					boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
				},
				"&:hover img": {
					transform: "scale(1.05)",
				},
			}}
		>
			{/* Image */}
			<Box
				sx={{
					position: "relative",
					width: "100%",
					aspectRatio: "1 / 1",
					overflow: "hidden",
				}}
			>
				<Image
					src={product?.images[0] ?? ""}
					alt={product?.name ?? ""}
					fill
					style={{
						objectFit: "cover",
						transition: "transform 0.5s ease",
					}}
					sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
				/>
				<Typography
					position="absolute"
					top="10px"
					p="5px 10px"
					bgcolor="#d4b038"
					color="#ffffff"
					fontSize="14px"
				>
					{product?.collection}
				</Typography>
			</Box>

			{/* Info */}
			<Stack p="20px">
				<Typography variant="body1" sx={{ fontSize: "16px", mb: "8px" }}>
					{product?.name}
				</Typography>
				<Typography
					variant="body1"
					sx={{ fontWeight: "500", color: "#996515", marginBottom: "15px" }}
				>
					${product?.price}
				</Typography>
				<Link href={`/products/${product?.id}`}>
					<Button
						sx={{
							display: "inline-block",
							backgroundColor: "transparent",
							border: "1px solid #B8860B",
							color: "#B8860B",
							padding: "8px 15px",
							fontSize: "12px",
							textTransform: "uppercase",
							letterSpacing: "1px",
							transition: "all 0.3s ease",
							"&:hover": {
								backgroundColor: "#D4AF37",
								color: "#ffffff",
							},
						}}
					>
						View Details
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default ProductCard;
