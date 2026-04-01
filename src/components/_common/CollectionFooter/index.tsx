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
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

const CollectionFooter: React.FC<IProp> = ({ playfair }) => {
	return (
		<MotionStack
			variants={stackVariant}
			initial="screenoff"
			whileInView={"screenon"}
			viewport={{
				once: true,
				amount: 0.5,
			}}
			bgcolor={"#222222"}
			color={"#fff"}
			m={"0 auto"}
			width={"100%"}
			alignItems={"center"}
			pt={3}
			height={"280px"}
			justifyContent={"flex-end"}
		>
			<Stack width={"70%"}>
				<Grid container rowSpacing={3} mb={4}>
					<Grid size={{ md: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							GoldBrand
						</Typography>
					</Grid>
					<Grid size={{ md: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							Visit Us
						</Typography>
					</Grid>
					<Grid size={{ md: 4 }}>
						<Typography fontFamily={playfair?.style.fontFamily} color="#f4ebc1">
							Connect
						</Typography>
					</Grid>
					<Grid size={{ md: 4 }}>
						<Typography fontWeight={100}>
							Crafting timeless elegance since 1995
						</Typography>
					</Grid>
					<Grid size={{ md: 4 }} spacing={1}>
						<Typography fontWeight={100}>123 Gold Street</Typography>
						<Typography fontWeight={100}>Luxury Avenue</Typography>
						<Typography fontWeight={100}>New York, NY 10001</Typography>
					</Grid>
					<Grid size={{ md: 4 }}>
						<Typography fontWeight={100}>Social Media</Typography>
					</Grid>
				</Grid>
				<Divider
					sx={{
						bgcolor: "#393939",
					}}
				/>
				<Stack alignItems={"center"} p={3}>
					<Typography color="#999999" variant="body2">
						© 2026 GoldBrand. All rights reserved.
					</Typography>
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default CollectionFooter;
