"use client";
import { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography, Fade } from "@mui/material";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";


export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400'
});

console.log('Playfair Font Object (module scope):', playfair);


const MainPageCom = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);



    return (
        <Stack component={'main'}>
            <Stack
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
                    transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
                    transition: `transform 1.2s cubic-bezier(0.33, 1, 0.68, 1)`,
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

                {/* Content Wrapper with Fade-in Transition */}
                <Fade in={isMounted} timeout={1200}>
                    <Stack
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
                            variant='h3'
                            textAlign={'center'}
                            sx={{
                                fontFamily: (playfair && playfair.style) ? playfair.style.fontFamily : 'serif',
                                lineHeight: '1.3',
                                letterSpacing: '1px',
                                fontWeight: 'normal',
                                transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
                                transition: `transform 1.2s cubic-bezier(0.33, 1, 0.68, 1)`,
                            }}
                        >
                            Timeless Elegance, Crafted to Perfection
                        </Typography>
                        <Typography
                            variant='h6'
                            fontWeight={300}
                            textAlign={'center'}
                            sx={{
                                opacity: 0.9,
                                transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
                                transition: `transform 1.2s cubic-bezier(0.33, 1, 0.68, 1)`,
                            }}
                        >
                            Exquisite jewelry that transcends generations
                        </Typography>
                        <Button
                            component={Link}
                            href="/collections"
                            variant="outlined"
                            color="inherit"
                            sx={{
                                borderColor: 'rgba(255, 255, 255, 0.7)',
                                padding: '12px 30px',
                                letterSpacing: '2px',
                                fontWeight: 'bold',
                                transition: 'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 1.2s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(224, 204, 22, 0.8)',
                                    borderColor: 'rgba(224, 204, 22, 0.8)',
                                    color: '#000'
                                },
                                transform: isMounted ? 'translateY(0)' : 'translateY(40px)',
                            }}
                        >
                            Explore Collection
                        </Button>
                    </Stack>
                </Fade>
            </Stack>
        </Stack>
    );
}

export default MainPageCom

