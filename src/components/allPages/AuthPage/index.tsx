"use client"

import { heroContainerVariants, MotionStack } from '@/components/_common/HeroSection'
import { Button, Checkbox, Divider, FormControlLabel, Input, Stack, TextField, Typography } from '@mui/material'
import { Cormorant_Garamond } from 'next/font/google'
import React from 'react'
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from 'next/link'


const cormonant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
})

interface LoginFormValues {
    username: string
    password: string
}

const initialValues: LoginFormValues = {
    username: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            "Password must include uppercase, lowercase, number and special character"
        )
});

const AuthPage = () => {

    const handleSubmit = () => {
        alert("Salam")
    }


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
                flexDirection={'row'}
            >
                {/* left side */}
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
                        sx={{
                            textTransform: 'uppercase'
                        }}
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
                {/* right side */}
                <Stack
                    p={'3rem'}
                    flex={1}
                >
                    <Stack
                        spacing={5}
                    >
                        <Stack
                            gap={1}
                        >
                            <Stack gap={4} flexDirection={'row'}>
                                <Typography>Sign In</Typography>
                                <Typography>Create Account</Typography>
                            </Stack>
                            <Divider />
                        </Stack>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <Form>
                                <Stack
                                    spacing={5}
                                >
                                    <Stack>
                                        <TextField
                                            variant="outlined"
                                            name="username"
                                            type="text"
                                            placeholder="Email Adress"
                                            fullWidth
                                        />
                                        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                                    </Stack>
                                    <Stack>
                                        <TextField
                                            variant="outlined"
                                            name="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            fullWidth
                                        />
                                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                                    </Stack>
                                    <Stack
                                        flexDirection={'row'}
                                        alignItems={'center'}
                                        justifyContent={'space-between'}
                                    >
                                        <Stack >
                                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                                        </Stack>
                                        <Typography color='#d4af38'>Forgot password?</Typography>
                                    </Stack>
                                    <Button
                                        variant='contained'
                                        type="submit"
                                        sx={{
                                            bgcolor: '#d4af38',
                                            border: 'none'
                                        }}
                                    >
                                        Login
                                    </Button>

                                </Stack>
                            </Form>
                        </Formik>
                    </Stack>
                </Stack>
            </MotionStack>
        </>
    )
}

export default AuthPage