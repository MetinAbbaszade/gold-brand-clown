import { Divider, duration, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IProp, MotionStack } from '../HeroSection';
import Link from 'next/link';

export const containerFramer = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const MainAboutSection: React.FC<IProp> = ({ playfair }) => {



    const imageUrl = 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80'
    return (
        <MotionStack
            variants={containerFramer}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            bgcolor={'#f8f8f8'}
            px={15}
            py={10}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={10}
        >
            <Stack
                maxWidth={'50%'}
                spacing={'17px'}
            >
                <Typography
                    fontFamily={playfair.style.fontFamily}
                    variant='h4'
                >
                    Our Craftsmanship
                </Typography>
                <Divider
                    sx={{
                        width: '60px',
                        bgcolor: '#d4af38'
                    }}
                />
                <Typography lineHeight={2}>
                    Since 1896, GoldBrand has been creating exquisite jewelry that combines traditional craftsmanship with contemporary design. Each piece is meticulously handcrafted by our master artisans using only the finest ethically sourced materials.
                </Typography>
                <Typography lineHeight={2}>
                    Our commitment to excellence ensures that every creation becomes a treasured heirloom, passed down through generations.
                </Typography>
                <Stack
                    component={Link}
                    href='/products'
                    direction={'row'}
                    sx={{
                        '&:hover': {
                            '& .learn-more-arrow': {
                                transform: 'translateX(7px)'
                            }
                        }
                    }}
                    spacing={0.3}
                >
                    <Typography color='#d4af38' >
                        Learn more about our heritage
                    </Typography>
                    <ArrowRightAltIcon
                        className='learn-more-arrow'
                        sx={{
                            color: '#d4af38',
                            fontWeight: '600',
                            transition: 'transform 0.5s ease-in',
                        }}
                    />
                </Stack>
            </Stack>
            <Stack
                minHeight={'500px'}
                minWidth={'800px'}
                sx={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </Stack>
        </MotionStack >
    )
}

export default MainAboutSection