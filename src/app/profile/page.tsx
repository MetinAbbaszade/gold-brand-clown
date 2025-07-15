import fetchDelay from "@/api/delay";
import { heroContainerVariants } from "@/components/_common/HeroSection";
import { MotionStack } from '@/components/_common/HeroSection'
import ProfilePageComponent from "@/components/allPages/ProfilePageComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

const page = async () => {
  const data = await fetchDelay();
  return <MotionStack
    variants={heroContainerVariants}
    initial='hidden'
    animate='visible'
    width={'100vw'}
    display="flex"
    alignItems="center"
    justifyContent="center"
    mt={15}
  >
    <ProfilePageComponent />
  </MotionStack>
}

export default page;
