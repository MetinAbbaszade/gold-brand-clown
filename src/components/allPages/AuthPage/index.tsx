"use client";

import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import { Cormorant_Garamond } from "next/font/google";
import { useContext } from "react";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import SignInComponent from "@/components/_common/SignInComponent";
import SignUpComponent from "@/components/_common/SignUpComponent";
import { AuthContext } from "@/context/AuthContext";

const cormonant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	display: "swap",
});

const GOLD = "#d4af37";

const AuthPage = () => {
	const { isSignIn, handleChange } = useContext(AuthContext);

	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			sx={{
				minHeight: "100vh",
				width: "100%",
				flexDirection: { xs: "column", md: "row" },
				bgcolor: "#fff",
				overflow: "hidden",
			}}
		>
			{/* Left image panel — hidden on mobile */}
			<Stack
				sx={{
					display: { xs: "none", md: "flex" },
					width: { md: "45%", lg: "50%" },
					minHeight: "100%",
					color: "#fff",
					p: { md: "3rem", lg: "4rem" },
					justifyContent: "center",
					background:
						'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80")',
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Typography
					sx={{
						fontSize: "1.5rem",
						letterSpacing: "2px",
						fontFamily: cormonant.style.fontFamily,
						mb: "2rem",
						textTransform: "uppercase",
					}}
				>
					Gold Brand
				</Typography>
				<Typography
					variant="h1"
					fontWeight={400}
					sx={{
						fontSize: { md: "2rem", lg: "2.5rem" },
						fontFamily: cormonant.style.fontFamily,
						mb: "1rem",
					}}
				>
					Fine Jewelry Collection
				</Typography>
				<Typography fontSize="1rem" maxWidth="90%">
					Experience luxury designed for the modern individual.
				</Typography>
			</Stack>

			{/* Mobile-only top banner */}
			<Stack
				sx={{
					display: { xs: "flex", md: "none" },
					width: "100%",
					height: "160px",
					color: "#fff",
					alignItems: "center",
					justifyContent: "center",
					background:
						'linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80")',
					backgroundSize: "cover",
					backgroundPosition: "center 30%",
				}}
			>
				<Typography
					sx={{
						fontSize: "1.25rem",
						letterSpacing: "3px",
						fontFamily: cormonant.style.fontFamily,
						textTransform: "uppercase",
					}}
				>
					Gold Brand
				</Typography>
				<Typography
					sx={{
						fontSize: "0.85rem",
						fontFamily: cormonant.style.fontFamily,
						opacity: 0.85,
						mt: 0.5,
					}}
				>
					Fine Jewelry Collection
				</Typography>
			</Stack>

			{/* Right form panel */}
			<Stack
				sx={{
					flex: 1,
					p: { xs: "2rem 1.5rem", sm: "3rem", md: "3rem" },
					overflowY: "auto",
					justifyContent: { md: "center" },
					"&::-webkit-scrollbar": { width: "6px" },
					"&::-webkit-scrollbar-thumb": {
						backgroundColor: "#ccc",
						borderRadius: "3px",
					},
				}}
			>
				<Stack
					spacing={4}
					sx={{
						width: "100%",
						maxWidth: { xs: "100%", sm: "420px" },
						mx: "auto",
					}}
				>
					<Box>
						<Tabs
							value={isSignIn ? 0 : 1}
							onChange={handleChange}
							variant="fullWidth"
							sx={{
								"& .MuiTab-root": {
									textTransform: "capitalize",
									color: "black",
									fontWeight: 400,
									fontSize: { xs: "14px", sm: "16px" },
									transition: "color 0.3s ease",
								},
								"& .MuiTab-root.Mui-selected": {
									color: GOLD,
									fontWeight: 500,
								},
								"& .MuiTabs-indicator": {
									backgroundColor: GOLD,
									height: "3px",
								},
								"& .MuiTab-root:hover": { color: GOLD },
							}}
						>
							<Tab label="Sign In" />
							<Tab label="Create Account" />
						</Tabs>
						<Divider />
					</Box>

					{isSignIn ? <SignInComponent /> : <SignUpComponent />}
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default AuthPage;
