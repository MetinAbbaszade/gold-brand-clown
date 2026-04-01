"use client";
import SearchIcon from "@mui/icons-material/Search";
import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
	Slider,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import CollectionFooter from "@/components/_common/CollectionFooter";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import ProductCard from "@/components/_common/ProductCard/ProductCard";
import { raleway } from "@/providers/ThemeRegistry";
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
			sx={{ width: "100%", overflowX: "hidden" }}
		>
			{/* Hero Banner */}
			<Stack
				bgcolor="#f5f5f5"
				sx={{
					minHeight: { xs: "180px", sm: "220px", md: "250px" },
					px: { xs: 2, sm: 4 },
				}}
				alignItems="center"
				justifyContent="center"
			>
				<Stack textAlign="center" spacing={{ xs: 2, md: 5 }}>
					<Typography
						fontWeight={100}
						fontFamily={playfair.style.fontFamily}
						sx={{ fontSize: { xs: "28px", sm: "36px", md: "48px" } }}
					>
						Jewelry Products
					</Typography>
					<Typography variant="subtitle1">
						Explore our exquisite gold pieces, handcrafted with precision and
						passion
					</Typography>
				</Stack>
			</Stack>

			{/* Filters + Products */}
			<Stack
				sx={{
					mx: "auto",
					width: { xs: "92%", sm: "88%", md: "75%", lg: "65%" },
					my: { xs: "2rem", md: "4rem" },
				}}
			>
				{/* Search bar */}
				<Stack flexDirection="row" m="1rem 0">
					<TextField
						variant="outlined"
						placeholder="Search jewelry..."
						sx={{ ...TEXT_FIELD_SX, flex: 1 }}
					/>
					<Stack
						alignItems="center"
						justifyContent="center"
						sx={{ width: "50px", minWidth: "50px" }}
						bgcolor="#d4af38"
					>
						<SearchIcon sx={{ color: "#fff" }} />
					</Stack>
				</Stack>

				{/* Filters row — stacks vertically on mobile */}
				<Stack
					sx={{
						flexDirection: { xs: "column", sm: "row" },
						columnGap: { sm: 3, md: 5 },
						rowGap: 2,
						alignItems: { sm: "center" },
						my: { xs: "1rem", md: "2rem" },
					}}
				>
					{/* Collection dropdown */}
					<Box
						sx={{
							width: { xs: "100%", sm: "220px", md: "250px" },
							border: "1px solid #e0e0e0",
							borderRadius: "8px",
							bgcolor: "background.paper",
							flexShrink: 0,
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

					{/* Price range slider */}
					<Box
						sx={{
							flex: 1,
							width: { xs: "100%", sm: "auto" },
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

				{/* Product grid */}
				<Grid container spacing={{ xs: 2, sm: 3 }} sx={{ my: "1rem" }}>
					{productDatas.map((data) => (
						<Grid key={data.id} size={{ xs: 12, sm: 6, lg: 4 }}>
							<ProductCard product={data} />
						</Grid>
					))}
				</Grid>
			</Stack>

			<CollectionFooter />
		</MotionStack>
	);
};

export default ProductPageComponent;
