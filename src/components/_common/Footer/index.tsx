import { Stack, Typography } from "@mui/material";

const Footer = () => {
	return (
		<Stack
			justifyContent={"center"}
			alignItems={"center"}
			height={"60px"}
			bgcolor={"#1a1a1a"}
			color={"#fff"}
		>
			<Typography variant="caption">
				&copy; 2026 GoldBrand. All Rights Reserved.
			</Typography>
		</Stack>
	);
};

export default Footer;
