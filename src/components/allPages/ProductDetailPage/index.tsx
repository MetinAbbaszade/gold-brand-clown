"use client";
import DiamondIcon from "@mui/icons-material/Diamond";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export interface ProductDetails {
	clarity: string;
	color: string;
	diamond: string;
	metal: string;
	weight: string;
}

export interface Product {
	collection: string;
	description: string;
	details: ProductDetails;
	id: string;
	images: string[];
	name: string;
	price: number;
	recentlyViewed: number[];
	relatedProducts: number[];
}

export interface ProductDetailPageProps {
	product: Product;
}

const GOLD = "#D4AF37";
const GOLD_DARK = "#B8860B";

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
	const [activeImg, setActiveImg] = useState(0);
	const [qty, setQty] = useState(1);

	return (
		<Grid container spacing={6}>
			<Grid size={{ xs: 12, md: 6 }}>
				<Stack gap={2}>
					<Box
						sx={{
							position: "relative",
							width: "100%",
							height: "450px",
							borderRadius: "4px",
							overflow: "hidden",
							bgcolor: "#f5f5f5",
						}}
					>
						<Image
							src={product.images[activeImg]}
							alt={product.name}
							fill
							style={{ objectFit: "cover" }}
						/>
					</Box>
					<Stack flexDirection="row" gap={1.5}>
						{product.images.map((img, i) => (
							<Box
								key={i}
								onClick={() => setActiveImg(i)}
								sx={{
									position: "relative",
									width: "90px",
									height: "90px",
									borderRadius: "4px",
									overflow: "hidden",
									cursor: "pointer",
									border: `2px solid ${i === activeImg ? GOLD : "transparent"}`,
									transition: "border-color 0.2s",
									flexShrink: 0,
								}}
							>
								<Image
									src={img}
									alt={`${product.name} ${i + 1}`}
									fill
									style={{ objectFit: "cover" }}
								/>
							</Box>
						))}
					</Stack>
				</Stack>
			</Grid>

			<Grid size={{ xs: 12, md: 6 }}>
				<Stack gap={2.5}>
					{/* Collection badge */}
					<Box
						sx={{
							display: "inline-block",
							bgcolor: "#fdf6e3",
							border: `1px solid ${GOLD}`,
							px: 2,
							py: 0.5,
							width: "100%",
						}}
					>
						<Typography
							fontSize="11px"
							letterSpacing="0.15em"
							textTransform="uppercase"
							color={GOLD_DARK}
						>
							{product.collection} Collection
						</Typography>
					</Box>

					{/* Name */}
					<Typography variant="h4" fontWeight={300}>
						{product.name}
					</Typography>

					{/* Rating */}
					<Stack flexDirection="row" alignItems="center" gap={1}>
						<Stack flexDirection="row" color={GOLD}>
							{[...Array(4)].map((_) => (
								<StarIcon key={Math.random()} sx={{ fontSize: 20 }} />
							))}
							<StarHalfIcon sx={{ fontSize: 20 }} />
						</Stack>
						<Typography variant="body2" color="text.secondary">
							4.5 (24 reviews)
						</Typography>
					</Stack>

					{/* Price */}
					<Typography fontSize="2rem" fontWeight={400} color="#1a1a1a">
						${product.price.toLocaleString()}
					</Typography>

					{/* Stock */}
					<Typography color="green" fontWeight={500}>
						In Stock
					</Typography>

					<Divider />

					{/* Quantity */}
					<Stack gap={1}>
						<Typography variant="body2" fontWeight={500}>
							Quantity
						</Typography>
						<Stack flexDirection="row" alignItems="center">
							<IconButton
								onClick={() => setQty((q) => Math.max(1, q - 1))}
								sx={{
									border: `1px solid #e0e0e0`,
									borderRadius: "2px",
									width: 36,
									height: 36,
								}}
							>
								-
							</IconButton>
							<Box
								sx={{
									width: 48,
									height: 36,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									border: "1px solid #e0e0e0",
									borderLeft: "none",
									borderRight: "none",
								}}
							>
								<Typography>{qty}</Typography>
							</Box>
							<IconButton
								onClick={() => setQty((q) => Math.min(10, q + 1))}
								sx={{
									border: `1px solid #e0e0e0`,
									borderRadius: "2px",
									width: 36,
									height: 36,
								}}
							>
								+
							</IconButton>
						</Stack>
					</Stack>

					{/* Actions */}
					<Stack flexDirection="row" gap={1.5}>
						<Button
							fullWidth
							startIcon={<ShoppingBagIcon />}
							sx={{
								bgcolor: GOLD,
								color: "#fff",
								borderRadius: "2px",
								py: 1.5,
								fontSize: "13px",
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								"&:hover": { bgcolor: GOLD_DARK },
							}}
						>
							Add to Cart
						</Button>
						<IconButton
							sx={{
								border: `1px solid #e0e0e0`,
								borderRadius: "2px",
								px: 2,
								"&:hover": { borderColor: GOLD, color: GOLD },
							}}
						>
							<FavoriteIcon />
						</IconButton>
					</Stack>

					{/* Share */}
					<Stack flexDirection="row" alignItems="center" gap={2}>
						<Typography variant="body2" color="text.secondary">
							Share:
						</Typography>
						{[FacebookIcon, PinterestIcon, InstagramIcon, TwitterIcon].map(
							(Icon) => (
								<IconButton
									key={Math.random()}
									size="small"
									sx={{ color: "#555", "&:hover": { color: GOLD } }}
								>
									<Icon fontSize="small" />
								</IconButton>
							),
						)}
					</Stack>

					<Divider />

					{/* Delivery */}
					<Stack gap={1.5}>
						{[
							{
								icon: <LocalShippingIcon />,
								text: "Free shipping on orders over $1000",
							},
							{ icon: <InventoryIcon />, text: "Secure packaging" },
							{ icon: <DiamondIcon />, text: "Authenticity certificate" },
						].map(({ icon, text }) => (
							<Stack
								key={text}
								flexDirection="row"
								alignItems="center"
								gap={1.5}
							>
								<Box sx={{ color: GOLD, display: "flex" }}>{icon}</Box>
								<Typography variant="body2" color="text.secondary">
									{text}
								</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Grid>
		</Grid>
	);
};

export default ProductDetailPage;
