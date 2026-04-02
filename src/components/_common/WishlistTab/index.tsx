"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { playfair_display } from "@/providers/ThemeRegistry";
import Image from "next/image";

const WishlistTab = () => {
	const { auth } = useContext(AuthContext);

	return (
		<Stack>
			<Typography
				sx={{ fontFamily: playfair_display.style.fontFamily }}
				variant="h6"
				color="#1a1a1a"
				marginBottom={2}
			>
				My Wishlist
			</Typography>

			{auth.userData?.wishlist?.length ? (
				<Grid container spacing={2}>
					{auth.userData.wishlist.map(({ id, img, name, price }) => (
						<Grid
							key={id}
							size={{ xs: 12, sm: 6, md: 4 }}
							sx={{
								border: "1px solid #e0e0e0",
								borderRadius: "4px",
								overflow: "hidden",
								transition: "0.2s ease",
								"&:hover": { boxShadow: "0 4px 16px rgba(0,0,0,0.1)" },
								"&:hover img": { transform: "scale(1.05)" },
								"&:hover .cancel": { opacity: 1 },
							}}
						>
							<Stack
								sx={{
									position: "relative",
									height: "150px",
									overflow: "hidden",
								}}
							>
								<Image
									src={img}
									alt={name}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										transition: "0.3s ease",
									}}
								/>
								<Button
									className="cancel"
									sx={{
										position: "absolute",
										top: 10,
										right: 10,
										minWidth: 0,
										width: 24,
										height: 24,
										borderRadius: "50%",
										bgcolor: "rgba(0,0,0,0.5)",
										color: "white",
										fontSize: "1.2rem",
										lineHeight: 1,
										p: 0,
										opacity: 0,
										transition: "0.2s ease",
										"&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
									}}
								>
									×
								</Button>
							</Stack>
							<Stack sx={{ p: "1rem" }}>
								<Typography
									component="h4"
									sx={{ fontSize: "0.95rem", mb: "4px", fontWeight: 500 }}
								>
									{name}
								</Typography>
								<Typography
									sx={{
										fontFamily: playfair_display.style.fontFamily,
										fontWeight: 700,
										color: "#9e7c0c",
										mb: "8px",
									}}
								>
									${price}
								</Typography>
								<Button
									sx={{
										width: "100%",
										py: 1,
										bgcolor: "#d4af37",
										color: "white",
										borderRadius: "4px",
										fontSize: "0.85rem",
										fontWeight: 500,
										transition: "0.2s ease",
										"&:hover": { bgcolor: "#9e7c0c" },
									}}
								>
									Add to Cart
								</Button>
							</Stack>
						</Grid>
					))}
				</Grid>
			) : (
				<Typography>No Wishlist found</Typography>
			)}
		</Stack>
	);
};

export default WishlistTab;
