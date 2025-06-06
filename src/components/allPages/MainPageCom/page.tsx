import { Stack } from "@mui/material";
import HeroSection from '../../_common/HeroSection';
import MainCollectionSection from "@/components/_common/MainCollectionSection";
import { Playfair_Display } from "next/font/google";
import { getAllCollection } from "@/api/collection";



export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400'
});



const MainPageCom = async () => {
    const data = await getAllCollection()
    return (
        <Stack component={'main'}>
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
                <MainCollectionSection playfair={playfair} data={data} />
            </Stack>
        </Stack>
    );
}

export default MainPageCom

