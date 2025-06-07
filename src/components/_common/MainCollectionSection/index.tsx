"use client";

import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { NextFont } from 'next/dist/compiled/@next/font';
import React, { useEffect, useState } from 'react';
import { MotionStack } from '../HeroSection';

interface ICollection {
    name: string;
    description: string;
    prodName: string;
    price: number;
    imageUrl: string;
    id: string;
}

export interface IComp {
    playfair: NextFont;
    collectionData: ICollection[];
}

const slideInVariants = {
    offscreen: {
        opacity: 0,
        x: -100
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const MainCollectionSection: React.FC<IComp> = ({ playfair, collectionData }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {

        if (collectionData && collectionData.length > 0) {
            const timer = setInterval(() => {
                setIndex((i) => (i + 1) % collectionData.length);
            }, 3000);

            return () => clearInterval(timer);
        }
    }, [collectionData]);


    if (!collectionData || collectionData.length === 0) {
        return null;
    }

    return (
        <Stack
            spacing={4}
            alignItems="center"
            width="100%"
        >
            <Stack textAlign={'center'}>
                <Typography
                    variant='h4'
                    sx={{
                        fontFamily: playfair.style.fontFamily,
                        fontSize: '36px'
                    }}
                >
                    Featured Collection
                </Typography>
                <Divider
                    sx={{
                        bgcolor: 'gold',
                        width: '20%',
                        margin: '10px auto',
                        height: '1px',
                    }}
                />
                <Typography
                    color={'#666'}
                    variant='overline'
                >
                    Discover our most coveted pieces
                </Typography>
            </Stack>
            <MotionStack
                variants={slideInVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                width={'100%'}
                height={'60vh'}
                borderRadius={'5px'}
                p={'0 30px'}
                color={'white'}
                spacing={10}
                justifyContent={'flex-start'}
                sx={{
                    backgroundImage: `url("${collectionData[index].imageUrl}")`,
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
                        borderRadius: '5px',
                    }}
                />
                <Stack component={'header'} spacing={2} zIndex={2}>
                    <Typography
                        variant='h3'
                        fontFamily={playfair.style.fontFamily}
                    >
                        {collectionData[index].name} Collection
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        {collectionData[index].description}
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
                            {collectionData[index].prodName}
                        </Typography>
                        <Typography
                            variant='h6'
                            color='gold'
                            fontWeight={100}
                        >
                            ${collectionData[index].price}
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
            </MotionStack>
        </Stack>
    );
}

export default MainCollectionSection;