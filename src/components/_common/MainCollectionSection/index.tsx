"use client";

import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { NextFont } from 'next/dist/compiled/@next/font'
import React, { useEffect, useState } from 'react'

export interface IComp {
    playfair: NextFont
}

export interface IMock {
    name: string
    description: string
    prodName: string
    price: number
    imageUrl: string
}

const MOCK_DATA: Array<IMock> = [
    {
        name: 'Celestial',
        description: 'First Description',
        prodName: 'Luna Drop Earrings',
        price: 500,
        imageUrl: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
    },
    {
        name: 'Romance',
        description: 'Second Description',
        prodName: 'Luna Drop Rings',
        price: 850,
        imageUrl: 'https://images.unsplash.com/photo-1476965805533-564543966f62?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Floral',
        description: 'Third Description',
        prodName: 'Luna Drop Earrings',
        price: 700,
        imageUrl: 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Royal',
        description: 'Fourth Description',
        prodName: 'Luna Drop Rings',
        price: 999,
        imageUrl: 'https://plus.unsplash.com/premium_photo-1674748385760-d846825598ab?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const MainCollectionSection: React.FC<IComp> = ({ playfair }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => {
                let j = i += 1
                if (j == MOCK_DATA.length) {
                    return 0
                }
                return j
            })
        }, 3000);

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
                p={'0 30px'}
                color={'white'}
                spacing={10}
                justifyContent={'flex-start'}
                sx={{
                    backgroundImage: `url("${MOCK_DATA[index].imageUrl}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}
                position={'relative'}
            >
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
                <Stack component={'header'} spacing={2} zIndex={2}>
                    <Typography
                        variant='h3'
                        fontFamily={playfair.style.fontFamily}
                    >
                        {MOCK_DATA[index].name} Collection
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        {MOCK_DATA[index].description}
                    </Typography>
                </Stack>
                <Stack
                    direction={'row'}
                    spacing={0}
                    zIndex={2}
                    mb={10}
                >
                    <Divider sx={{ bgcolor: 'gold', width: '2px' }} orientation="vertical" flexItem />
                    <Stack
                        component={'section'}
                        bgcolor={'rgba(0,0,0,0.5)'}
                        minWidth={'300px'}
                        p={'50px 20px'}
                        spacing={2}

                    >
                        <Typography
                            variant='h5'
                            fontFamily={playfair.style.fontFamily}
                        >
                            {MOCK_DATA[index].prodName}
                        </Typography>
                        <Typography
                            variant='h6'
                            color='gold'
                            fontWeight={100}
                        >
                            ${MOCK_DATA[index].price}
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
                            href='/collections'
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