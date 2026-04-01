import { Box, Stack } from "@mui/material";
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
		<Stack component="main" sx={{ overflowX: "hidden" }}>
			<Box mb={{ xs: "24px", sm: "36px", md: "50px" }}>
				<HeroSection playfair={playfair} />
			</Box>

			<Stack
				sx={{
					width: { xs: "92%", sm: "88%", md: "80%" }, // ✅ was minWidth: "80%" — breaks on small screens
					alignItems: "center",
					justifyContent: "center",
					mx: "auto",
					py: { xs: "24px", sm: "36px", md: "50px" }, // ✅ responsive vertical padding
				}}
			>
				<MainCollectionSection
					playfair={playfair}
					collectionData={collectionData}
				/>
			</Stack>

			<Box my={{ xs: "20px", sm: "30px", md: "40px" }}>
				{" "}
				{/* ✅ responsive margin */}
				<MainAboutSection playfair={playfair} />
			</Box>

			<Box my={{ xs: "24px", sm: "36px", md: "50px" }}>
				{" "}
				{/* ✅ responsive margin */}
				<MainTestimonials
					playfair={playfair}
					testimonialsData={testimonialsData}
				/>
			</Box>

			<Box mt={{ xs: "24px", sm: "36px", md: "50px" }}>
				{" "}
				{/* ✅ responsive margin */}
				<SubscribeSection playfair={playfair} />
			</Box>

			<MainFooter playfair={playfair} />
			<Footer />
		</Stack>
	);
};

export default MainPageCom;
