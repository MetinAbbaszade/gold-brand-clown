"use client"

import { ErrorMessage, Form, Formik } from "formik";
import { Button, Checkbox, duration, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import * as Yup from "yup";
import { useContext, useState } from "react";
import fetchUserByEmail, { FetchUserResponse } from "@/api/user";
import { motion } from 'framer-motion'
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

interface LoginFormValues {
    username: string;
    password: string;
}

const initialValues: LoginFormValues = {
    username: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
});

const typographyVariant = {
    hidden: {
        opacity: 0,
        y: -20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

const MotionTypography = motion(Typography)

const SignInComponent = () => {
    const { loginFunction } = useContext(AuthContext)
    const [authError, setAuthError] = useState<string | null>(null);
    const router = useRouter()

    const handleSubmit = async (values: LoginFormValues) => {
        setAuthError(null);
        const result: FetchUserResponse = await fetchUserByEmail(values);

        if ("msg" in result) {
            setAuthError(result.msg);
        } else {
            loginFunction(result.data)
            router.push('/')
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, values }) => (
                <Form>
                    <Stack spacing={4}>
                        {/* Error message on top */}
                        {authError && (
                            <MotionTypography
                                variants={typographyVariant}
                                initial="hidden"
                                animate="visible"
                                color="error"
                                fontSize="0.9rem">
                                {authError}
                            </MotionTypography>
                        )}

                        <Stack>
                            <TextField
                                variant="outlined"
                                name="username"
                                type="text"
                                placeholder="Email Address"
                                fullWidth
                                value={values.username}
                                onChange={(e) => {
                                    setAuthError(null);
                                    handleChange(e);
                                }}
                                onBlur={handleBlur}
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
                                value={values.password}
                                onChange={(e) => {
                                    setAuthError(null);
                                    handleChange(e);
                                }}
                                onBlur={handleBlur}
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </Stack>

                        <Stack
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                            <Typography color="#d4af38">Forgot password?</Typography>
                        </Stack>

                        <Button
                            variant="contained"
                            type="submit"
                            sx={{ bgcolor: '#d4af38', border: 'none' }}
                        >
                            Login
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default SignInComponent;
