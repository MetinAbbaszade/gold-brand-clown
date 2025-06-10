import CollectionsPage from "@/components/allPages/CollectionsPage";
import { playfair } from "@/components/allPages/MainPageCom/page";
import { Stack } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Collections'
}


const page = () => {
  return (
    <Stack marginTop={'80px'} minWidth={'100vw'}>
      <CollectionsPage playfair={playfair}/>
    </Stack>
  )
}

export default page