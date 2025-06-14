import { heroContainerVariants, MotionStack } from "@/components/_common/HeroSection";
import CollectionsPage from "@/components/allPages/CollectionsPage";
import { playfair } from "@/components/allPages/MainPageCom/page";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Collections'
}


const page = () => {
  return (
    <MotionStack
      variants={heroContainerVariants}
      initial='hidden'
      animate='visible'
      marginTop={'80px'}
      minWidth={'100vw'}
    >
      <CollectionsPage playfair={playfair} />
    </MotionStack>
  )
}

export default page