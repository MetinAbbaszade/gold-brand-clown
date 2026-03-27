import { Stack, Box } from "@mui/material";
import HeroSection from '../../_common/HeroSection';
import MainCollectionSection from "@/components/_common/MainCollectionSection";
import { Montserrat, Playfair_Display } from "next/font/google";
import { getAllCollection } from "@/api/mainCollection";
import MainAboutSection from "@/components/_common/MainAboutSection";
import MainTestimonials from "@/components/_common/MainTestimonials";
import { getAllTestimonials } from "@/api/testimonials";
import SubscribeSection from "@/components/_common/SubscribeSection";
import Footer from "@/components/_common/Footer";
import MainFooter from "@/components/_common/MainFooter";



export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400'
});



const MainPageCom = async () => {
   const [collectionData, testimonialsData] = await Promise.all([
        getAllCollection(),
        getAllTestimonials()
    ]);
    return (
        <Stack component="main">
            <Box my="50px">
                <HeroSection playfair={playfair} />
            </Box>
            <Stack
                sx={{
                    minWidth: '80%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    py: '50px',
                }}
            >
                <MainCollectionSection playfair={playfair} collectionData={collectionData} />
            </Stack>
            <Box my="40px">
                <MainAboutSection playfair={playfair} />
            </Box>
            <Box my="50px">
                <MainTestimonials playfair={playfair} testimonialsData={testimonialsData} />
            </Box>
            <Box mt="50px">
                <SubscribeSection playfair={playfair} />
            </Box>
            <MainFooter playfair={playfair} />
            <Footer />
        </Stack>
    );
}

export default MainPageCom

