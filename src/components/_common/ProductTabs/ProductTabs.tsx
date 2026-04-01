"use client";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import {
	Box,
	Button,
	Divider,
	Stack,
	Tab,
	Tabs,
	Typography,
} from "@mui/material";
import { useState } from "react";
import type { Product } from "@/components/allPages/ProductPageComponent";

const GOLD = "#D4AF37";
const GOLD_DARK = "#B8860B";

const reviews = [
	{
		name: "Sarah J.",
		date: "March 15, 2023",
		rating: 5,
		title: "Stunning piece, excellent quality",
		content:
			"This pendant exceeded my expectations. The gold has a beautiful luster and the diamond catches light magnificently. I've received numerous compliments. Shipping was fast and packaging was gorgeous too!",
	},
	{
		name: "Michael T.",
		date: "February 28, 2023",
		rating: 4,
		title: "Beautiful gift",
		content:
			"Bought this for my wife's birthday. She absolutely loves it. The craftsmanship is excellent and the pendant looks even better in person than in the photos.",
	},
];

const Stars = ({ count }: { count: number }) => (
	<Stack flexDirection="row" color={GOLD}>
		{[...Array(5)].map((_, i) => {
			if (i < Math.floor(count))
				return <StarIcon key={i} sx={{ fontSize: 18 }} />;
			if (i < count) return <StarHalfIcon key={i} sx={{ fontSize: 18 }} />;
			return <StarBorderIcon key={i} sx={{ fontSize: 18 }} />;
		})}
	</Stack>
);

const ProductTabs = ({ product }: { product: Product }) => {
	const [tab, setTab] = useState(0);

	return (
		<Box mt={6}>
			<Tabs
				value={tab}
				onChange={(_, v) => setTab(v)}
				variant="scrollable"
				scrollButtons="auto"
				allowScrollButtonsMobile
				sx={{
					borderBottom: "1px solid #e0e0e0",
					"& .MuiTab-root": {
						textTransform: "uppercase",
						fontSize: "12px",
						letterSpacing: "0.1em",
						fontWeight: 500,
						color: "#888",
						minWidth: { xs: "auto", sm: "90px" },
						px: { xs: 1.5, sm: 2 },
					},
					"& .Mui-selected": { color: `${GOLD_DARK} !important` },
					"& .MuiTabs-indicator": { backgroundColor: GOLD },
				}}
			>
				<Tab label="Description" />
				<Tab label="Details" />
				<Tab label="Reviews" />
				<Tab label="Shipping & Returns" />
			</Tabs>

			{/* Description */}
			{tab === 0 && (
				<Box py={4}>
					<Typography variant="body1" lineHeight={1.9} color="text.secondary">
						{product.description}
					</Typography>
				</Box>
			)}

			{/* Details */}
			{tab === 1 && (
				<Box py={4}>
					<Stack
						gap={0}
						sx={{
							border: "1px solid #e0e0e0",
							borderRadius: "4px",
							overflow: "hidden",
						}}
					>
						{Object.entries(product.details).map(([key, value], i, arr) => (
							<Stack
								key={key}
								sx={{
									flexDirection: { xs: "column", sm: "row" },
									borderBottom:
										i < arr.length - 1 ? "1px solid #e0e0e0" : "none",
									"&:hover": { bgcolor: "#fafafa" },
								}}
							>
								<Box
									sx={{
										width: { xs: "100%", sm: "200px" },
										px: 3,
										py: 1.5,
										bgcolor: "#f9f6ee",
										borderRight: { xs: "none", sm: "1px solid #e0e0e0" },
										borderBottom: { xs: "1px solid #e0e0e0", sm: "none" },
									}}
								>
									<Typography
										fontSize="13px"
										fontWeight={500}
										textTransform="capitalize"
									>
										{key.replace(/([A-Z])/g, " $1")}
									</Typography>
								</Box>
								<Box sx={{ px: 3, py: 1.5 }}>
									<Typography fontSize="13px" color="text.secondary">
										{value as string}
									</Typography>
								</Box>
							</Stack>
						))}
					</Stack>
				</Box>
			)}

			{/* Reviews */}
			{tab === 2 && (
				<Box py={4}>
					<Stack
						sx={{
							flexDirection: { xs: "column", sm: "row" },
							justifyContent: "space-between",
							alignItems: { xs: "flex-start", sm: "center" },
							gap: { xs: 2, sm: 0 },
							mb: 4,
							p: 3,
							bgcolor: "#fafafa",
							border: "1px solid #e0e0e0",
							borderRadius: "4px",
						}}
					>
						<Stack alignItems="center" gap={1}>
							<Typography fontSize="3rem" fontWeight={300} lineHeight={1}>
								4.5
							</Typography>
							<Stars count={4.5} />
							<Typography variant="body2" color="text.secondary">
								Based on 24 reviews
							</Typography>
						</Stack>
						<Button
							sx={{
								border: `1px solid ${GOLD}`,
								color: GOLD_DARK,
								borderRadius: "2px",
								px: 3,
								py: 1,
								fontSize: "12px",
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								"&:hover": { bgcolor: GOLD, color: "#fff" },
							}}
						>
							Write a Review
						</Button>
					</Stack>

					<Stack gap={3}>
						{reviews.map((r, i) => (
							<Box
								key={i}
								p={3}
								sx={{ border: "1px solid #e0e0e0", borderRadius: "4px" }}
							>
								<Stack
									sx={{
										flexDirection: { xs: "column", sm: "row" },
										justifyContent: "space-between",
										alignItems: { xs: "flex-start", sm: "flex-start" },
										gap: { xs: 1, sm: 0 },
										mb: 1.5,
									}}
								>
									<Stack gap={0.5}>
										<Typography fontWeight={500}>{r.name}</Typography>
										<Stars count={r.rating} />
									</Stack>
									<Typography variant="body2" color="text.secondary">
										{r.date}
									</Typography>
								</Stack>
								<Divider sx={{ mb: 1.5 }} />
								<Typography fontWeight={500} mb={0.5}>
									{r.title}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									lineHeight={1.8}
								>
									{r.content}
								</Typography>
							</Box>
						))}
					</Stack>
				</Box>
			)}

			{/* Shipping & Returns */}
			{tab === 3 && (
				<Box py={4}>
					<Stack gap={3}>
						<Box>
							<Typography variant="h6" fontWeight={400} mb={1.5}>
								Shipping Information
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								mb={1.5}
								lineHeight={1.8}
							>
								All orders are processed within 1-2 business days. Shipping
								options will be calculated at checkout.
							</Typography>
							<Stack gap={0.75}>
								{[
									"Standard Shipping: 3-5 business days",
									"Express Shipping: 1-2 business days",
									"International Shipping: 7-14 business days",
								].map((item) => (
									<Stack
										key={item}
										flexDirection="row"
										gap={1}
										alignItems="center"
									>
										<Box
											sx={{
												width: 5,
												height: 5,
												borderRadius: "50%",
												bgcolor: GOLD,
												flexShrink: 0,
											}}
										/>
										<Typography variant="body2" color="text.secondary">
											{item}
										</Typography>
									</Stack>
								))}
							</Stack>
						</Box>
						<Divider />
						<Box>
							<Typography variant="h6" fontWeight={400} mb={1.5}>
								Return Policy
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								lineHeight={1.8}
							>
								We offer a 30-day return policy for all our jewelry pieces. To
								be eligible for a return, your item must be unused and in the
								same condition that you received it. It must also be in the
								original packaging.
							</Typography>
						</Box>
						<Divider />
						<Box>
							<Typography variant="h6" fontWeight={400} mb={1.5}>
								Warranty
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								lineHeight={1.8}
							>
								All our gold jewelry comes with a lifetime warranty against
								manufacturing defects.
							</Typography>
						</Box>
					</Stack>
				</Box>
			)}
		</Box>
	);
};

export default ProductTabs;
