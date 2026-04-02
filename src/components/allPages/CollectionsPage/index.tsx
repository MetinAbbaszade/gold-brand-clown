import { Grid, Stack, Typography } from "@mui/material";
import { getAllCollections } from "@/api/collection";
import CollectionCard from "@/components/_common/CollectionCard";
import CollectionFooter from "@/components/_common/CollectionFooter";
import FeaturedCollection from "@/components/_common/FeaturedCollection";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import { playfair } from "../MainPageCom/page";

export interface IData {
	id: string;
	name: string;
	description: string;
	longDescription: string;
	image: string;
	link: string;
}

const CollectionsPage = async () => {
	const datas: IData[] | null = await getAllCollections();
	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			sx={{ width: "100%", overflowX: "hidden" }}
		>
			<Stack width="100%">
				{/* Hero Banner */}
				<Stack
					bgcolor="#f5f5f5"
					sx={{
						minHeight: { xs: "220px", sm: "280px", md: "350px" },
						px: { xs: 2, sm: 4 },
					}}
					alignItems="center"
					justifyContent="center"
				>
					<Stack
						textAlign="center"
						spacing={{ xs: 2, md: 5 }}
						sx={{ width: { xs: "100%", sm: "70%", md: "40%" } }}
					>
						<Typography
							fontFamily={playfair.style.fontFamily}
							fontWeight={100}
							sx={{ fontSize: { xs: "28px", sm: "36px", md: "48px" } }}
						>
							Our Collections
						</Typography>
						<Typography variant="subtitle1">
							Discover our exquisite gold creations, each piece telling a unique
							story of craftsmanship and elegance
						</Typography>
					</Stack>
				</Stack>

				{/* Cards Grid */}
				<Stack
					sx={{ p: { xs: "30px 16px", sm: "40px 24px", md: "50px 0" } }}
					alignItems="center"
				>
					<Grid
						container
						rowSpacing={5}
						columnSpacing={5}
						sx={{ width: { xs: "100%", sm: "90%", md: "70%" } }}
					>
						{datas?.map((data) => (
							<Grid key={data.id} size={{ xs: 12, sm: 6, md: 4 }}>
								<CollectionCard data={data} playfair={playfair} />
							</Grid>
						))}
					</Grid>
				</Stack>

				{/* Featured + Footer */}
				<Stack>
					<FeaturedCollection
						data={datas[Math.floor(Math.random() * 9)]}
						playfair={playfair}
					/>
				</Stack>
				<Stack>
					<CollectionFooter playfair={playfair} />
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default CollectionsPage;
