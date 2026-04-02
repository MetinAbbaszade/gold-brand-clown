"use client";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import type { NextFont } from "next/dist/compiled/@next/font";
import type React from "react";
import { useEffect, useState } from "react";
import { MotionStack } from "../HeroSection";
import type { MainCollection } from "@/store/mainCollections";

export interface ICollection {
	name: string;
	description: string;
	prodName: string;
	price: number;
	imageUrl: string;
	id: string;
}

export interface IComp {
	playfair: NextFont;
	collectionData: MainCollection[];
}

const slideInVariants = {
	offscreen: { opacity: 0, x: -100 },
	onscreen: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const MainCollectionSection: React.FC<IComp> = ({
	playfair,
	collectionData,
}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (collectionData && collectionData.length > 0) {
			const timer = setInterval(() => {
				setIndex((i) => (i + 1) % collectionData.length);
			}, 3000);
			return () => clearInterval(timer);
		}
	}, [collectionData]);

	if (!collectionData || collectionData.length === 0) return null;

	return (
		<Stack spacing={4} alignItems="center" width="100%">
			<Stack textAlign="center">
				<Typography
					variant="h4"
					sx={{
						fontFamily: playfair.style.fontFamily,
						fontSize: { xs: "24px", sm: "30px", md: "36px" }, // ✅ responsive font
					}}
				>
					Featured Collection
				</Typography>
				<Divider
					sx={{
						bgcolor: "gold",
						width: "20%",
						margin: "10px auto",
						height: "1px",
					}}
				/>
				<Typography color="#666" variant="overline">
					Discover our most coveted pieces
				</Typography>
			</Stack>

			<MotionStack
				variants={slideInVariants}
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.3 }}
				width="100%"
				minHeight={{ xs: "auto", md: "60vh" }} // ✅ no fixed height on mobile
				borderRadius="5px"
				p={{ xs: "20px", md: "0 30px" }} // ✅ responsive padding
				color="white"
				spacing={{ xs: 3, md: 10 }} // ✅ tighter spacing on mobile
				justifyContent="flex-start"
				sx={{
					backgroundImage: `url("${collectionData[index].imageUrl}")`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					flexDirection: "column",
				}}
				position="relative"
			>
				{/* Overlay */}
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0,0,0,0.4)",
						zIndex: 1,
						borderRadius: "5px",
					}}
				/>

				{/* Header */}
				<Stack component="header" spacing={2} zIndex={2} pt={{ xs: 3, md: 4 }}>
					<Typography
						variant="h3"
						fontFamily={playfair.style.fontFamily}
						sx={{ fontSize: { xs: "24px", sm: "32px", md: "48px" } }} // ✅ responsive
					>
						{collectionData[index].name} Collection
					</Typography>
					<Typography
						variant="h6"
						sx={{ fontSize: { xs: "14px", sm: "16px", md: "20px" } }}
					>
						{collectionData[index].description}
					</Typography>
				</Stack>

				{/* Bottom row: product card + nav */}
				<Stack
					direction={{ xs: "column", md: "row" }} // ✅ stack vertically on mobile
					spacing={{ xs: 3, md: 30 }} // ✅ no huge gap on mobile
					pb={{ xs: 3, md: 0 }}
					alignItems={{ xs: "flex-start", md: "flex-end" }}
				>
					{/* Product card */}
					<Stack direction="row" spacing={0} zIndex={2} mb={{ xs: 0, md: 10 }}>
						<Divider
							sx={{ bgcolor: "gold", width: "2px" }}
							orientation="vertical"
							flexItem
						/>
						<Stack
							component="section"
							bgcolor="rgba(0,0,0,0.5)"
							minWidth={{ xs: "200px", md: "300px" }} // ✅ smaller on mobile
							p={{ xs: "20px 16px", md: "50px 20px" }} // ✅ responsive padding
							spacing={2}
						>
							<Typography
								variant="h5"
								fontFamily={playfair.style.fontFamily}
								sx={{ fontSize: { xs: "18px", md: "24px" } }}
							>
								{collectionData[index].prodName}
							</Typography>
							<Typography variant="h6" color="gold" fontWeight={100}>
								${collectionData[index].price}
							</Typography>
							<Button
								variant="outlined"
								sx={{
									color: "#fff",
									alignSelf: "flex-start",
									border: "1px solid gold",
									padding: "10px 20px",
									opacity: 0.8,
								}}
								href="/collections"
							>
								Shop Now
							</Button>
						</Stack>
					</Stack>

					{/* Navigation arrows + dots */}
					<Stack
						direction="row"
						alignItems="center"
						spacing={2}
						zIndex={100}
						mb={{ xs: 0, md: 2 }}
					>
						<Stack
							component={Button}
							onClick={() =>
								setIndex(
									(i) =>
										(i - 1 + collectionData.length) % collectionData.length,
								)
							}
							sx={{ bgcolor: "rgba(255,255,255,0.2)", minWidth: "unset" }}
							borderRadius="50%"
							width="50px"
							height="50px"
							border="1px solid rgba(255,255,255,0.3)"
						>
							<KeyboardArrowLeftIcon sx={{ color: "#fff", fontSize: "30px" }} />
						</Stack>
						<Stack direction="row" spacing={1}>
							{[...Array(collectionData.length).keys()].map((i) => (
								<Stack
									key={i}
									width="10px"
									height="10px"
									borderRadius="50%"
									bgcolor={i === index ? "#d4af36" : "rgba(255,255,255,0.4)"}
									zIndex={2}
								/>
							))}
						</Stack>
						<Stack
							component={Button}
							onClick={() => setIndex((i) => (i + 1) % collectionData.length)}
							sx={{ bgcolor: "rgba(255,255,255,0.2)", minWidth: "unset" }}
							borderRadius="50%"
							width="50px"
							height="50px"
							border="1px solid rgba(255,255,255,0.3)"
						>
							<ChevronRightIcon sx={{ color: "#fff", fontSize: "30px" }} />
						</Stack>
					</Stack>
				</Stack>
			</MotionStack>
		</Stack>
	);
};

export default MainCollectionSection;
