"use client";

import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { NextFont } from 'next/dist/compiled/@next/font'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export interface IComp {
    playfair: NextFont
}

const MainCollectionSection: React.FC<IComp> = ({ playfair }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => {
                let j = i += 1
                if (j == 5) {
                    return 0
                }
                return j
            })
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <Box height={'40vh'} width={'100%'}>
            <Stack textAlign={'center'}>
                <Typography
                    variant='h4'
                    sx={{
                        fontFamily: playfair.style.fontFamily,
                        marginBottom: '15px',
                        fontSize: '36px'
                    }}
                >
                    Featured Collection
                </Typography>
                <Divider
                    sx={{
                        bgcolor: 'gold',
                        width: '20%',
                        margin: '0 auto 10px',
                        height: '1px',
                    }}
                />
                <Typography
                    color={'#666'}
                    variant='overline'
                >
                    Discover our most coveted pieces</Typography>
            </Stack>
            <Stack
                width={'100%'}
                minHeight={'100%'}
                m={'30px 0'}
                borderRadius={'5px'}
                p={'50px 30px'}
                color={'white'}
                spacing={10}
                justifyContent={'flex-start'}
                sx={{
                    backgroundImage: 'url("/mainImage.avif")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Stack component={'header'} spacing={2}>
                    <Typography
                        variant='h4'
                        fontFamily={playfair.style.fontFamily}
                    >
                        Celestial Collection
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        Inspired by the cosmos, designed for eternity
                    </Typography>
                </Stack>
                <Stack
                    direction={'row'}
                    spacing={0}
                >
                    <Divider sx={{ bgcolor: 'gold', width: '2px' }} orientation="vertical" flexItem />
                    <Stack
                        component={'section'}
                        bgcolor={'rgba(0,0,0,0.8)'}
                        minWidth={'300px'}
                        p={'50px 20px'}
                        spacing={2}
                    >
                        <Typography
                            variant='h5'
                            fontFamily={playfair.style.fontFamily}
                        >
                            Luna Drop Earrings
                        </Typography>
                        <Typography
                            variant='h6'
                        >
                            $1840
                        </Typography>
                        <Button
                            variant='outlined'
                            sx={{
                                color: '#fff',
                                alignSelf: 'flex-start',
                                border: '1px solid gold',
                                padding: '10px 20px',
                                opacity: 0.8,
                            }}
                        >
                            Shop Now
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default MainCollectionSection