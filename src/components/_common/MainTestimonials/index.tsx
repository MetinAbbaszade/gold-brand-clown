"use client";

import { Divider, Stack, Typography } from "@mui/material"
import { MotionStack } from "../HeroSection"
import { containerFramer } from "../MainAboutSection"
import { NextFont } from "next/dist/compiled/@next/font"
import { useEffect, useState } from "react";

interface ITestimonials {
    name: string
    location: string
    rating: number
    comment: string
}

interface IProp {
    playfair: NextFont
    montserrat: NextFont
    testimonialsData: ITestimonials[]
}


const MainTestimonials: React.FC<IProp> = ({ playfair, montserrat, testimonialsData }) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i += 1) % testimonialsData.length)
        }, 2000);

        return () => clearInterval(timer);
    }, [testimonialsData.length])
    return (
        <MotionStack
            variants={containerFramer}
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.5 }}
            width={'800px'}
            m={'0 auto'}
            textAlign={'center'}
            spacing={4}
        >
            <Stack
                alignItems={'center'}
            >
                <Typography
                    variant='h4'
                    fontFamily={playfair.style.fontFamily}
                    mb={2}
                >Client Appreciation</Typography>
                <Divider
                    sx={{
                        bgcolor: 'gold',
                        width: '60px',
                    }}
                />
                <Typography
                    fontFamily={montserrat?.style.fontFamily}
                    mt={1}
                >Treasured words from our value clients</Typography>
            </Stack>
            <Stack
                spacing={3}
            >
                <Typography
                    fontFamily={playfair.style.fontFamily}
                    fontSize={'24px'}
                    fontStyle={'italic'}
                >"{testimonialsData[index].comment}"</Typography>
                <Stack
                    direction={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={0.3}
                >
                    <Divider sx={{
                        width: '15px',
                        bgcolor: '#666'
                    }} />
                    <Typography
                        color='#666'
                        fontFamily={montserrat?.style.fontFamily}
                        variant='body1'
                    >{testimonialsData[index].name}</Typography>
                </Stack>
            </Stack>
            <Stack
                direction={'row'}
                spacing={1}
                justifyContent={'center'}
            >
                {[...Array(testimonialsData.length).keys()].map((i) => (
                    <Stack
                        key={i}
                        width={10}
                        height={10}
                        border={'1px solid #000'}
                        borderRadius={'50%'}
                        bgcolor={i === index ? 'gold' : 'inherit'}
                    />
                ))}
            </Stack>
        </MotionStack >
    )
}

export default MainTestimonials