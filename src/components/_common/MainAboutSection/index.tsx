import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IProp } from '../HeroSection';

const MainAboutSection: React.FC<IProp> = ({ playfair }) => {

    const imageUrl = 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80'
    return (
        <Stack
            bgcolor={'#f8f8f8'}
            px={8}
            py={10}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Stack
                maxWidth={'40%'}
                spacing={'15px'}
            >
                <Typography
                    fontFamily={playfair.style.fontFamily}
                    variant='h4'
                >
                    Our Craftsmanship
                </Typography>
                <Divider
                    sx={{
                        width: '40px',
                        bgcolor: 'gold'
                    }}
                />
                <Typography>
                    Since 1896, GoldBrand has been creating exquisite jewelry that combines traditional craftsmanship with contemporary design. Each piece is meticulously handcrafted by our master artisans using only the finest ethically sourced materials.
                </Typography>
                <Typography>
                    Our commitment to excellence ensures that every creation becomes a treasured heirloom, passed down through generations.
                </Typography>
                <Stack>
                    <Typography>
                        Learn more about our heritage
                    </Typography>
                    <ArrowRightAltIcon />
                </Stack>
            </Stack>
            <Stack
                minHeight={'500px'}
                minWidth={'750px'}
                sx={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Stack>
        </Stack>
    )
}

export default MainAboutSection