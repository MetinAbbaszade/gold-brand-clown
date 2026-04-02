import { Button, Grid, Stack, Typography } from "@mui/material";
import type { IProp } from "../CollectionCard";
import { stackVariant } from "../CollectionFooter";
import { MotionStack } from "../HeroSection";

const FeaturedCollection: React.FC<IProp> = ({ data, playfair }) => {
	return (
		<MotionStack
			variants={stackVariant}
			initial="screenoff"
			whileInView="screenon"
			viewport={{ once: true, amount: 0.3 }}
			bgcolor="#f5f5f5"
			alignItems="center"
			justifyContent="center"
			sx={{
				minHeight: { xs: "auto", md: "500px" },
				py: { xs: 5, md: 0 },
				px: { xs: 2, sm: 4, md: 0 },
			}}
		>
			<Grid
				container
				sx={{
					width: { xs: "100%", sm: "90%", md: "80%" },
					minHeight: { md: "70%" },
				}}
				columnSpacing={4}
				rowSpacing={{ xs: 4, md: 0 }}
			>
				{/* Text Column */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Stack
						spacing={3}
						height="100%"
						justifyContent="center"
						sx={{ py: { xs: 2, md: 0 } }}
					>
						<Typography
							color="#d4af36"
							textTransform="uppercase"
							fontFamily="'Cormorant Garamond', serif"
							letterSpacing={1}
							variant="h6"
							fontWeight={100}
						>
							Featured Collection
						</Typography>
						<Typography
							fontFamily={playfair?.style.fontFamily}
							variant="h4"
							color="#222222"
							sx={{ fontSize: { xs: "1.5rem", md: "2.125rem" } }}
						>
							{data.name}
						</Typography>
						<Typography letterSpacing={1} lineHeight={1.5}>
							{data.longDescription}
						</Typography>
						<Button
							href="/products"
							variant="outlined"
							sx={{
								width: "200px",
								color: "#d4af36",
								border: "1px solid #d4af36",
							}}
						>
							Discover Now
						</Button>
					</Stack>
				</Grid>

				{/* Image Column */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Stack
						width="100%"
						sx={{
							height: { xs: "250px", sm: "320px", md: "100%" },
							backgroundImage: `url("${data.image}")`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						boxShadow={3}
					/>
				</Grid>
			</Grid>
		</MotionStack>
	);
};

export default FeaturedCollection;
