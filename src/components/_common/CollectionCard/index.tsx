import { Button, Stack, Typography } from "@mui/material";
import type { NextFont } from "next/dist/compiled/@next/font";
import type { IData } from "@/components/allPages/CollectionsPage";

export interface IProp {
	data: IData;
	playfair?: NextFont;
}

const CollectionCard: React.FC<IProp> = ({
	data: { name, description, image },
	playfair,
}) => {
	return (
		<Stack
			width="100%"
			boxShadow={2}
			borderRadius="10px"
			sx={{
				"&:hover": {
					transform: "translateY(-7px)",
				},
				"&:hover .button": {
					opacity: 1,
					visibility: "visible",
				},
				transition: "transform 0.25s ease",
			}}
		>
			<Stack
				position="relative"
				sx={{ height: { xs: "220px", sm: "260px", md: "300px" } }}
			>
				{/* Hover overlay */}
				<Stack
					className="button"
					position="absolute"
					width="100%"
					height="100%"
					alignItems="center"
					justifyContent="center"
					sx={{
						opacity: 0,
						visibility: "hidden",
						transition: "opacity 0.3s ease, visibility 0.3s ease",
						zIndex: 1,
					}}
				>
					<Button
						href="/products"
						variant="contained"
						sx={{ bgcolor: "#D4AF37", p: "10px 30px" }}
					>
						Explore
					</Button>
				</Stack>

				{/* Image */}
				<Stack
					sx={{
						backgroundImage: `url("${image}")`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "center",
						height: "100%",
						borderTopLeftRadius: "10px",
						borderTopRightRadius: "10px",
					}}
				/>
			</Stack>

			<Stack p="2em">
				<Typography
					fontFamily={playfair?.style.fontFamily}
					fontSize="22px"
					color="#222"
					mb="10px"
				>
					{name}
				</Typography>
				<Typography variant="body2">{description}</Typography>
			</Stack>
		</Stack>
	);
};

export default CollectionCard;
