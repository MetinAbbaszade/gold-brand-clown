import { Stack, Box } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import { getAllCollection } from "@/api/mainCollection";
import { getAllTestimonials } from "@/api/testimonials";
import Footer from "@/components/_common/Footer";
import MainAboutSection from "@/components/_common/MainAboutSection";
import MainCollectionSection from "@/components/_common/MainCollectionSection";
import MainFooter from "@/components/_common/MainFooter";
import MainTestimonials from "@/components/_common/MainTestimonials";
import SubscribeSection from "@/components/_common/SubscribeSection";
import HeroSection from "../../_common/HeroSection";

export const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: "400",
});

const MainPageCom = async () => {
	const [collectionData, testimonialsData] = await Promise.all([
		getAllCollection(),
		getAllTestimonials(),
	]);
	return (
		<Stack component="main">
			<Box mb={"50px"}>
				<HeroSection playfair={playfair} />
			</Box>
			<Stack
				sx={{
					minWidth: "80%",
					alignItems: "center",
					justifyContent: "center",
					mx: "auto",
					py: "50px",
				}}
			>
				<MainCollectionSection
					playfair={playfair}
					collectionData={collectionData}
				/>
			</Stack>
			<Box my="40px">
				<MainAboutSection playfair={playfair} />
			</Box>
			<Box my="50px">
				<MainTestimonials
					playfair={playfair}
					testimonialsData={testimonialsData}
				/>
			</Box>
			<Box mt="50px">
				<SubscribeSection playfair={playfair} />
			</Box>
			<MainFooter playfair={playfair} />
			<Footer />
		</Stack>
	);
};

export default MainPageCom;
