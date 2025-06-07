import { Stack } from "@mui/material";
import HeroSection from '../../_common/HeroSection';
import MainCollectionSection from "@/components/_common/MainCollectionSection";
import { Montserrat, Playfair_Display } from "next/font/google";
import { getAllCollection } from "@/api/collection";
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

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400'
})



const MainPageCom = async () => {
    const collectionData = await getAllCollection()
    const testimonialsData = await getAllTestimonials()
    return (
        <Stack
            component={'main'}
        >
            <Stack m={'50px 0'}>
                <HeroSection playfair={playfair} />
            </Stack>
            <Stack
                minWidth={'80%'}
                alignItems={'center'}
                justifyContent={'center'}
                m={'0 auto'}
                p={'50px 0'}
            >
                <MainCollectionSection playfair={playfair} collectionData={collectionData} />
            </Stack>
            <Stack
                m={'40px 0'}
            >
                <MainAboutSection playfair={playfair} montserrat={montserrat} />
            </Stack>
            <Stack
                m={'50px 0'}
            >
                <MainTestimonials playfair={playfair} montserrat={montserrat} testimonialsData={testimonialsData} />
            </Stack>
            <Stack
                m={'50px 0 0'}
            >
                <SubscribeSection playfair={playfair} montserrat={montserrat} />
            </Stack>
            <Stack>
                <MainFooter playfair={playfair} montserrat={montserrat}/>
            </Stack>
            <Stack>
                <Footer montserrat={montserrat}/>
            </Stack>
        </Stack>
    );
}

export default MainPageCom

