"use client";

import { Box, Button, Stack, Typography } from '@mui/material'
import { motion } from 'framer-motion';
import { NextFont } from 'next/dist/compiled/@next/font';

export interface IProp {
    playfair: NextFont
    montserrat?: NextFont
}
const MotionButton = motion(Button)
export const MotionStack = motion(Stack)


export const heroContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};


export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};


const itemVariants = {
    hidden: {
        opacity: 0,
        y: 75
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.33, 1, 0.68, 1],
        },
    },
};

const HeroSection: React.FC<IProp> = ({ playfair }) => {

    return (
        <MotionStack
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            height={'100vh'}
            minWidth={'100vw'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'url("/mainImage.avif")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
            }}
        >
            {/* Dark Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }}
            />
            <MotionStack
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                maxWidth={'800px'}
                alignItems={'center'}
                spacing={3}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    padding: { xs: '20px', md: '0px' }
                }}
            >
                <Typography
                    component={motion.p}
                    variants={itemVariants}
                    variant='h3'
                    textAlign={'center'}
                    sx={{
                        fontFamily: (playfair && playfair.style) ? playfair.style.fontFamily : 'serif',
                        lineHeight: '1.3',
                        letterSpacing: '1px',
                        fontWeight: 'normal',
                        transition: `transform 1.2s cubic-bezier(0.33, 1, 0.68, 1)`,
                    }}
                >
                    Timeless Elegance, Crafted to Perfection
                </Typography>
                <Typography
                    component={motion.h6}
                    variants={itemVariants}
                    variant='h6'
                    fontWeight={300}
                    textAlign={'center'}
                    sx={{
                        opacity: 0.9,
                    }}
                >
                    Exquisite jewelry that transcends generations
                </Typography>
                <MotionButton
                    variants={itemVariants}
                    href="/collections"
                    variant="outlined"
                    color="inherit"
                    sx={{
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                        padding: '12px 30px',
                        letterSpacing: '2px',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'rgba(224, 204, 22, 0.8)',
                            borderColor: 'rgba(224, 204, 22, 0.8)',
                            color: '#000'
                        },
                    }}
                >
                    Explore Collection
                </MotionButton>
            </MotionStack>
        </MotionStack>
    )
}

export default HeroSection