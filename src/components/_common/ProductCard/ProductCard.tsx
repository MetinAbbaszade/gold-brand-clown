import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import type { ProductDetailPageProps } from "@/components/allPages/ProductDetailPage";

const ProductCard = ({ product }: ProductDetailPageProps) => {
	return (
		<Box
			width="250px"
			sx={{
				boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
				transition: "all 0.3s ease",
				background: "#fff",
				"&:hover": {
					transform: "translateY(-5px)",
					boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
				},
				"&:hover >.MuiStack-root.css-nen11g-MuiStack-root>.MuiBox-root.css-h6ptix>img":
					{
						transform: "scale(1.05)",
					},
				overflow: "hidden",
			}}
			borderRadius={"5px"}
		>
			<Stack>
				<Box
					sx={{
						position: "relative",
						width: "100%",
						height: "250px",
					}}
				>
					<Image
						src={product.images[0]}
						alt={product.name}
						fill
						style={{
							objectFit: "cover",
							transition: "transform 0.5s ease",
						}}
						sizes={"250px"}
					/>
					<Typography
						position="absolute"
						top="10px"
						p={"5px 10px"}
						bgcolor="#d4b038"
						color="#ffffff"
						fontSize={"14px"}
					>
						{product.collection}
					</Typography>
				</Box>
			</Stack>
			<Stack p="20px">
				<Typography variant="body1" sx={{ fontSize: "16px", mb: "8px" }}>
					{product.name}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						fontWeight: "500",
						color: "#996515",
						marginBottom: "15px",
					}}
				>
					${product.price}
				</Typography>
				<Button
					sx={{
						display: "inline-block",
						backgroundColor: "transparent",
						border: "1px solid #B8860B",
						color: "#B8860B",
						padding: "8px 15px",
						textDecoration: "none",
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
					<Link href={`/products/${product.id}`}>View Details</Link>
				</Button>
			</Stack>
		</Box>
	);
};

export default ProductCard;
