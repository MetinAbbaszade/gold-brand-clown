import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import type React from "react";
import { type IProp, MotionStack } from "../HeroSection";

export const containerFramer = {
	offscreen: { opacity: 0 },
	onscreen: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const MainAboutSection: React.FC<IProp> = ({ playfair }) => {
	const imageUrl =
		"https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80";

	return (
		<MotionStack
			variants={containerFramer}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.5 }}
			bgcolor="#f8f8f8"
			px={{ xs: 3, sm: 6, md: 15 }} // ✅ was px={15} — way too wide on mobile
			py={{ xs: 6, md: 10 }}
			direction={{ xs: "column", md: "row" }} // ✅ stack vertically on mobile
			justifyContent="space-between"
			alignItems="center"
			spacing={{ xs: 4, md: 10 }}
		>
			<Stack
				maxWidth={{ xs: "100%", md: "50%" }} // ✅ was always 50%, too narrow on mobile
				spacing="17px"
			>
				<Typography fontFamily={playfair.style.fontFamily} variant="h4">
					Our Craftsmanship
				</Typography>
				<Divider sx={{ width: "60px", bgcolor: "#d4af38" }} />
				<Typography lineHeight={2}>
					Since 1896, GoldBrand has been creating exquisite jewelry that
					combines traditional craftsmanship with contemporary design. Each
					piece is meticulously handcrafted by our master artisans using only
					the finest ethically sourced materials.
				</Typography>
				<Typography lineHeight={2}>
					Our commitment to excellence ensures that every creation becomes a
					treasured heirloom, passed down through generations.
				</Typography>
				<Link href="/products">
					<Stack
						direction="row"
						sx={{
							"&:hover": {
								"& .learn-more-arrow": { transform: "translateX(7px)" },
							},
						}}
						spacing={0.3}
					>
						<Typography color="#d4af38">
							Learn more about our heritage
						</Typography>
						<ArrowRightAltIcon
							className="learn-more-arrow"
							sx={{
								color: "#d4af38",
								fontWeight: "600",
								transition: "transform 0.5s ease-in",
							}}
						/>
					</Stack>
				</Link>
			</Stack>

			<Stack
				sx={{
					height: { xs: "300px", sm: "400px", md: "500px" }, // ✅ was minHeight: 500px fixed
					width: { xs: "100%", md: "auto" }, // ✅ was minWidth: 800px — overflows on mobile
					minWidth: { md: "500px" },
					backgroundImage: `url(${imageUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
					backgroundRepeat: "no-repeat",
					borderRadius: "4px",
				}}
			/>
		</MotionStack>
	);
};

export default MainAboutSection;
