import { Divider, Grid, Stack, Typography } from "@mui/material"
import { NextFont } from "next/dist/compiled/@next/font"
import Footer from "../Footer"

interface IProp {
    playfair?: NextFont
    montserrat?: NextFont
}

const CollectionFooter: React.FC<IProp> = ({ playfair, montserrat }) => {
    return (
        <Stack
            bgcolor={'#222222'}
            color={'#fff'}
            m={'0 auto'}
            width={'100%'}
            alignItems={'center'}
            pt={3}
            height={'280px'}

            justifyContent={'flex-end'}
        >
            <Stack
                width={'70%'}
            >
                <Grid
                    container
                    rowSpacing={3}
                    mb={4}
                >

                    <Grid size={{ md: 4 }}>
                        <Typography
                            fontFamily={playfair?.style.fontFamily}
                            color="#f4ebc1"
                        >
                            GoldBrand
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <Typography
                            fontFamily={playfair?.style.fontFamily}
                            color="#f4ebc1"
                        >
                            Visit Us
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <Typography
                            fontFamily={playfair?.style.fontFamily}
                            color="#f4ebc1"
                        >
                            Connect
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            fontWeight={100}
                        >
                            Crafting timeless elegance since 1995
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 4 }} spacing={1}>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            fontWeight={100}
                        >
                            123 Gold Street
                        </Typography>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            fontWeight={100}
                        >
                            Luxury Avenue
                        </Typography>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            fontWeight={100}
                        >
                            New York, NY 10001
                        </Typography>
                    </Grid>
                    <Grid size={{ md: 4 }}>
                        <Typography
                            fontFamily={montserrat?.style.fontFamily}
                            fontWeight={100}
                        >
                            Social Media
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{
                    bgcolor: '#393939'
                }} />
                <Stack
                    alignItems={'center'}
                    p={3}
                >
                    <Typography
                        color="#999999"
                        variant="body2"
                        sx={{
                            fontFamily: montserrat?.style.fontFamily
                        }}
                    >
                        © 2025 GoldBrand. All rights reserved.
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CollectionFooter