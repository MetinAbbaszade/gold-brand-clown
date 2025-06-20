import ProfilePageComponent from "@/components/allPages/ProfilePageComponent";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Profile'
}

const page = () => {
  return (
    <Stack
      height="100vh"
      width={'100vw'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <ProfilePageComponent />
    </Stack>
  );
}

export default page;
