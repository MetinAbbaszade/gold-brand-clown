import { ErrorMessage, Form, Formik } from "formik";
import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import * as Yup from "yup";
import { FetchUserResponse, postUser } from "@/api/user";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export interface LoginFormValues {
    username: string;
    password: string;
    email: string;
    address: string;
}

const initialValues: LoginFormValues = {
    username: "",
    password: "",
    email: "",
    address: ""
};

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .max(20, "Username can't be longer than 20 characters")
        .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores")
        .required("Username is required"),

    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password can't be longer than 32 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password must include uppercase, lowercase, number and special character"
        )
        .required("Password is required"),
    address: Yup.string()
        .min(5, "Address must be at least 5 characters")
        .max(100, "Address can't be longer than 100 characters")
        .required("Address is required")
});

const SignUpComponent = () => {
    const { setIsSignIn } = useContext(AuthContext)
    const handleSubmit = async (values: LoginFormValues) => {
        const result = await postUser(values);
        if ("msg" in result) {
            alert(result.msg);
            return;
        }
        alert("Xoş gəldin!");
        setIsSignIn(true);
    };

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ getFieldProps }) => (
                <Form>
                    <Stack spacing={5}>
                        <Stack>
                            <TextField
                                label="Email Address"
                                variant="outlined"
                                fullWidth
                                {...getFieldProps("email")}
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                        </Stack>

                        <Stack>
                            <TextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                {...getFieldProps("username")}
                            />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
                        </Stack>

                        <Stack>
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                {...getFieldProps("password")}
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                        </Stack>

                        <Stack>
                            <TextField
                                label="Address"
                                variant="outlined"
                                fullWidth
                                {...getFieldProps("address")}
                            />
                            <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                        </Stack>

                        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
                            <FormControlLabel control={<Checkbox />} label="Remember me" />
                            <Typography color="#d4af38">Forgot password?</Typography>
                        </Stack>

                        <Button
                            variant="contained"
                            type="submit"
                            sx={{
                                bgcolor: '#d4af38',
                                border: 'none'
                            }}
                        >
                            Sign Up
                        </Button>
                    </Stack>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpComponent;
