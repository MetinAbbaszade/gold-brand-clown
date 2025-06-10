import { Stack, Typography } from "@mui/material"
import { NextFont } from "next/dist/compiled/@next/font"



const Footer = () => {
    return (
        <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'60px'}
            bgcolor={'#1a1a1a'}
            color={'#fff'}
        >
            <Typography
                variant='caption'
            >
                &copy; 2025 GoldBrand. All Rights Reserved.
            </Typography>
        </Stack>
    )
}

export default Footer