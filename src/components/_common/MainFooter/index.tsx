import { Divider, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Link from "next/link";
import { IProp, MotionStack } from "../HeroSection";
import { containerFramer } from "../MainAboutSection";

const datas = {
    Collections: [
        "Celestial",
        "Heritage",
        "Bespoke",
        "Bridal"
    ],
    Products: [
        "Contact Us",
        "Book Appointment",
        "Care Guide",
        "FAQ",
    ],
    Legal: [
        "Privacy Policy",
        "Terms of Service",
        "Shipping Policy",
        "Returns & Exchanges",
    ]
}

const MainFooter: React.FC<IProp> = ({ playfair }) => {
    return (
        <MotionStack
            variants={containerFramer}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.5 }}
            bgcolor={'#f8f8f8'}
            height={'300px'}
            justifyContent={'center'}
        >
            <Stack
                direction={'row'}
                spacing={20}
                justifyContent={'center'}
            >
                <Stack
                    spacing={2}
                >
                    <Typography
                        fontFamily={playfair?.style.fontFamily}
                        variant="h5"
                        letterSpacing={2}
                        fontWeight={100}
                    >GOLDBRAND
                    </Typography>
                    <Typography
                        variant="body2"
                    >Timeless elegance since 1896
                    </Typography>
                    <Stack
                        direction={'row'}
                        spacing={2}
                    >
                        <InstagramIcon />
                        <FacebookIcon />
                        <PinterestIcon />
                    </Stack>
                </Stack>
                <Stack
                    direction={'row'}
                    spacing={15}
                >

                    {Object.entries(datas).map(([key, value]) => {
                        return (
                            <Stack
                                key={key}
                                spacing={1}
                            >
                                <Typography
                                    component={Link}
                                    variant="h6"
                                    fontFamily={playfair?.style.fontFamily}
                                    href={'/' + key.toLowerCase()}
                                >{key}</Typography>
                                <Divider
                                    sx={{
                                        width: '25px',
                                        bgcolor: 'gold'
                                    }}
                                />
                                <Stack>
                                    {value.map((v) => (
                                        <Link
                                            href={'/' + key.toLowerCase()}
                                            key={v}
                                        >
                                            <Typography
                                                mb={'10px'}
                                                sx={{
                                                    color: '#666',
                                                    fontSize: '14px',
                                                    fontWeight: 400
                                                }}
                                            >{v}</Typography>
                                        </Link>
                                    ))}
                                </Stack>
                            </Stack>
                        )
                    })}
                </Stack>
            </Stack>
        </MotionStack>
    )
}

export default MainFooter