import { heroContainerVariants, MotionStack } from "@/components/_common/HeroSection";
import ProfilePageComponent from "@/components/allPages/ProfilePageComponent";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

const page = () => {
  return (
    <MotionStack
      variants={heroContainerVariants}
      initial='hidden'
      animate='visible'
      height="100vh"
      width={'100vw'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
      <ProfilePageComponent />
    </MotionStack>
  );
}

export default page;
