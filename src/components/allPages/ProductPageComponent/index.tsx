"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import { montserrat, raleway } from "@/providers/ThemeRegistry";
import { playfair } from "../MainPageCom/page";

const COLLECTION_OPTIONS: CollectionOption[] = [
	{ value: "", label: "All Collections" },
	{ value: "Heritage", label: "Heritage" },
	{ value: "Modern", label: "Modern Minimalist" },
	{ value: "Celestial", label: "Celestial" },
	{ value: "Royal", label: "Royal Heritage" },
	{ value: "Bridal", label: "Bridal" },
];

const SLIDER_SX = {
	color: "#B8860B",
	"& .MuiSlider-thumb": {
		backgroundColor: "#fff",
		border: "2px solid currentColor",
		"&:hover, &.Mui-focusVisible, &.Mui-active": {
			boxShadow: "0px 0px 0px 8px rgba(184, 134, 11, 0.16)",
		},
	},
	"& .MuiSlider-rail": { color: "#ccc" },
};

const MENU_ITEM_SX = {
	"&.Mui-selected": {
		bgcolor: "rgba(184, 134, 11, 0.1)",
		color: "#B8860B",
		"&:hover": { bgcolor: "rgba(184, 134, 11, 0.15)" },
	},
	"&:hover": { bgcolor: "rgba(184, 134, 11, 0.05)" },
};

const TEXT_FIELD_SX = {
	"& .MuiOutlinedInput-root": {
		borderRadius: "0",
		height: "50px",
		transition: "0.2s ease",
		"& fieldset": { borderColor: "#e0e0e0" },
		"&:hover fieldset": { borderColor: "#e0e0e0" },
		"&.Mui-focused fieldset": {
			borderColor: "#d4af37",
			boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.2)",
		},
	},
	fontFamily: raleway.style.fontFamily,
	fontSize: "1rem",
};

interface CollectionOption {
	value: string;
	label: string;
}

interface ProductPageComponentProps {
	initialCollection?: string;
	label?: string;
	productDatas: Product[];
}

export interface ProductDetails {
	clarity: string;
	color: string;
	diamond: string;
	height: string;
	metal: string;
	weight: string;
	width: string;
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

const formatPriceValue = (value: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);

const getAriaValueText = (value: number) =>
	`Price is ${formatPriceValue(value)}`;

const LABEL_ID = "collection-filter-label";

const minPriceInitial = 100;
const maxPriceInitial = 10000;
const minGlobal = 100;
const maxGlobal = 10000;
const step = 100;

const ProductPageComponent = ({
	initialCollection = "",
	label = "Select Collection",
	productDatas,
}: ProductPageComponentProps) => {
	const [priceRange, setPriceRange] = useState<number[]>([
		minPriceInitial,
		maxPriceInitial,
	]);
	const [selectedCollection, setSelectedCollection] =
		useState<string>(initialCollection);

	const handleRangeChange = (_: Event, newValue: number | number[]) => {
		setPriceRange(newValue as number[]);
	};

	const handleCollectionChange = (event: SelectChangeEvent<string>) => {
		setSelectedCollection(event.target.value);
	};

	const formattedMin = useMemo(
		() => formatPriceValue(priceRange[0]),
		[priceRange[0]],
	);
	const formattedMax = useMemo(
		() => formatPriceValue(priceRange[1]),
		[priceRange[1]],
	);

	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			width="100vw"
		>
			<Stack
				bgcolor="#f5f5f5"
				height="250px"
				alignItems="center"
				justifyContent="center"
			>
				<Stack textAlign="center" spacing={5}>
					<Typography
						fontSize="48px"
						fontWeight={100}
						fontFamily={playfair.style.fontFamily}
					>
						Jewelry Products
					</Typography>
					<Typography variant="subtitle1">
						Explore our exquisite gold pieces, handcrafted with precision and
						passion
					</Typography>
				</Stack>
			</Stack>
			<Stack m="4rem auto" width="65%">
				<Stack flexDirection="row" m="1rem 0">
					<TextField
						variant="outlined"
						placeholder="Search jewelry..."
						sx={{ ...TEXT_FIELD_SX, width: "50%" }}
					/>
					<Stack
						alignItems="center"
						justifyContent="center"
						width="50px"
						bgcolor="#d4af38"
					>
						<SearchIcon sx={{ color: "#fff" }} />
					</Stack>
				</Stack>
				<Stack flexDirection="row" columnGap={5} alignItems="center">
					<Box
						sx={{
							width: 250,
							m: "2rem 0",
							border: "1px solid #e0e0e0",
							borderRadius: "8px",
							bgcolor: "background.paper",
						}}
					>
						<FormControl fullWidth>
							<InputLabel id={LABEL_ID}>{label}</InputLabel>
							<Select
								labelId={LABEL_ID}
								value={selectedCollection}
								label={label}
								onChange={handleCollectionChange}
							>
								{COLLECTION_OPTIONS.map(({ value, label }) => (
									<MenuItem key={value} value={value} sx={MENU_ITEM_SX}>
										{label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
					<Box
						sx={{
							width: "80%",
							p: 2,
							border: "1px solid #e0e0e0",
							borderRadius: "8px",
							bgcolor: "background.paper",
						}}
					>
						<Typography
							gutterBottom
							variant="subtitle1"
							sx={{ mb: 2, fontWeight: "bold" }}
						>
							Price Range:
						</Typography>
						<Stack sx={{ px: 1 }}>
							<Slider
								value={priceRange}
								onChange={handleRangeChange}
								min={minGlobal}
								max={maxGlobal}
								step={step}
								valueLabelDisplay="auto"
								valueLabelFormat={formatPriceValue}
								getAriaLabel={() => "Price range"}
								getAriaValueText={getAriaValueText}
								disableSwap
								sx={SLIDER_SX}
							/>
						</Stack>
						<Stack
							direction="row"
							justifyContent="center"
							alignItems="center"
							mt={2}
							spacing={1}
						>
							<Typography component="span" variant="body1" fontWeight="medium">
								{formattedMin}
							</Typography>
							<Typography component="span" variant="body1">
								-
							</Typography>
							<Typography component="span" variant="body1" fontWeight="medium">
								{formattedMax}
							</Typography>
						</Stack>
					</Box>
				</Stack>
				<Stack m="2rem 0" direction={"row"} flexWrap="wrap" gap={"2rem"}>
					{productDatas.map((data) => {
						return (
							<Box
								key={data.id}
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
											src={data.images[0]}
											alt={data.name}
											fill
											style={{
												objectFit: "cover",
												transition: "transform 0.5s ease",
											}}
										/>
										<Typography
											position="absolute"
											top="10px"
											p={"5px 10px"}
											bgcolor="#d4b038"
											color="#ffffff"
											fontSize={"14px"}
											fontFamily={montserrat.style.fontFamily}
										>
											{data.collection}
										</Typography>
									</Box>
								</Stack>
								<Stack p="20px">
									<Typography
										variant="body1"
										sx={{ fontSize: "16px", mb: "8px" }}
									>
										{data.name}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontWeight: "500",
											color: "#996515",
											marginBottom: "15px",
										}}
									>
										${data.price}
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
										<Link href="/">View Details</Link>
									</Button>
								</Stack>
							</Box>
						);
					})}
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default ProductPageComponent;
