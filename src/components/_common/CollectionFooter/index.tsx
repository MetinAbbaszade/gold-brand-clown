import { Divider, Grid, Stack, Typography } from "@mui/material";
import type { NextFont } from "next/dist/compiled/@next/font";
import { MotionStack } from "../HeroSection";

interface IProp {
	playfair?: NextFont;
}

export const stackVariant = {
	screenoff: { opacity: 0 },
	screenon: {
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

const CollectionFooter: React.FC<IProp> = ({ playfair }) => {
	return (
		<MotionStack
			variants={stackVariant}
			initial="screenoff"
			whileInView="screenon"
			viewport={{ once: true, amount: 0.5 }}
			bgcolor="#222222"
			color="#fff"
			width="100%"
			alignItems="center"
			sx={{
				minHeight: { xs: "auto", md: "280px" },
				pt: { xs: 4, md: 3 },
				justifyContent: { xs: "flex-start", md: "flex-end" },
			}}
		>
			<Stack sx={{ width: { xs: "90%", md: "70%" } }}>
				<Grid container rowSpacing={3} mb={4}>
					{/* Headings row */}
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							GoldBrand
						</Typography>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							Visit Us
						</Typography>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							Connect
						</Typography>
					</Grid>

					{/* Content row */}
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontWeight={100}>
							Crafting timeless elegance since 1995
						</Typography>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontWeight={100}>123 Gold Street</Typography>
						<Typography fontWeight={100}>Luxury Avenue</Typography>
						<Typography fontWeight={100}>New York, NY 10001</Typography>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Typography fontWeight={100}>Social Media</Typography>
					</Grid>
				</Grid>

				<Divider sx={{ bgcolor: "#393939" }} />

				<Stack alignItems="center" p={3}>
					<Typography color="#999999" variant="body2">
						© 2026 GoldBrand. All rights reserved.
					</Typography>
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default CollectionFooter;
