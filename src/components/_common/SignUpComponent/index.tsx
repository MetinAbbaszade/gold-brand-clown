import { ErrorMessage, Form, Formik } from "formik";
import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import * as Yup from "yup"

interface LoginFormValues {
    username: string
    password: string
    email: string
    number: string
    adress: string
}

const initialValues: LoginFormValues = {
    username: "",
    password: "",
    email: "",
    number: "",
    adress: ""
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
            "Password must include uppercase, lowercase, number and special character"
        ),
    number: Yup.string().required("Number is required"),
    adress: Yup.string().required('Adress is required')
});

const SignUpComponent = () => {
    const handleSubmit = () => {
        alert("Salam")
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <Stack
                    spacing={5}
                    overflow={'hidden'}
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
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                            fullWidth
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </Stack>
                    <Stack>
                        <TextField
                            variant="outlined"
                            name="number"
                            type="text"
                            placeholder="Enter your number"
                            fullWidth
                        />
                        <ErrorMessage name="number" component="div" className="text-red-500 text-sm mt-1" />
                    </Stack>
                    <Stack>
                        <TextField
                            variant="outlined"
                            name="adress"
                            type="text"
                            placeholder="Enter your Adress"
                            fullWidth
                        />
                        <ErrorMessage name="adress" component="div" className="text-red-500 text-sm mt-1" />
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
    )
}

export default SignUpComponent