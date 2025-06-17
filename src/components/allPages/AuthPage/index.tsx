import { heroContainerVariants, MotionStack } from '@/components/_common/HeroSection'
import { Stack, Typography } from '@mui/material'
import { Cormorant_Garamond } from 'next/font/google'
import React from 'react'

const cormonant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
})

const AuthPage = () => {
    return (
        <>
            <MotionStack
                variants={heroContainerVariants}
                initial={'hidden'}
                animate={'visible'}
                width={'900px'}
                height={'600px'}
                bgcolor={'#fff'}
                boxShadow={4}
                borderRadius={'10px'}
            >
                <Stack
                    width={'50%'}
                    height={'100%'}
                    color={"#fff"}
                    p={"3rem"}
                    justifyContent={'center'}
                    sx={{
                        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        borderTopLeftRadius: '10px',
                        borderBottomLeftRadius: '10px'
                    }}
                >
                    <Typography
                        fontSize={"1.5rem"}
                        letterSpacing={'2px'}
                        fontFamily={cormonant.style.fontFamily}
                        marginBottom={'2rem'}
                    >
                        Gold Brand
                    </Typography>
                    <Typography
                        variant='h1'
                        fontWeight={400}
                        fontSize={'2.5rem'}
                        fontFamily={cormonant.style.fontFamily}
                        marginBottom={'1rem'}
                    >
                        Fine Jewelry Collection
                    </Typography>
                    <Typography
                        fontSize={'1rem'}
                        maxWidth={'90%'}
                    >
                        Experience luxury designed for the modern individual.
                    </Typography>
                </Stack>
                <Stack></Stack>
            </MotionStack>
        </>
    )
}

export default AuthPage