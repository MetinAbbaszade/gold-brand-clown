"use client";

import {
	Button,
	Checkbox,
	FormControlLabel,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { postUser } from "@/api/user";
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
	address: "",
};

const validationSchema = Yup.object({
	username: Yup.string()
		.min(3, "Username must be at least 3 characters")
		.max(20, "Username can't be longer than 20 characters")
		.matches(
			/^[a-zA-Z0-9_]+$/,
			"Username can only contain letters, numbers, and underscores",
		)
		.required("Username is required"),
	email: Yup.string()
		.email("Enter a valid email")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.max(32, "Password can't be longer than 32 characters")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
			"Password must include uppercase, lowercase, number and special character",
		)
		.required("Password is required"),
	address: Yup.string()
		.min(5, "Address must be at least 5 characters")
		.max(100, "Address can't be longer than 100 characters")
		.required("Address is required"),
});

const SignUpComponent = () => {
	const { setIsSignIn } = useContext(AuthContext);

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
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{({ getFieldProps }) => (
				<Form>
					<Stack spacing={3}>
						<Stack>
							<TextField
								label="Email Address"
								variant="outlined"
								fullWidth
								size="small"
								{...getFieldProps("email")}
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</Stack>

						<Stack>
							<TextField
								label="Username"
								variant="outlined"
								fullWidth
								size="small"
								{...getFieldProps("username")}
							/>
							<ErrorMessage
								name="username"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</Stack>

						<Stack>
							<TextField
								label="Password"
								variant="outlined"
								type="password"
								fullWidth
								size="small"
								{...getFieldProps("password")}
							/>
							<ErrorMessage
								name="password"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</Stack>

						<Stack>
							<TextField
								label="Address"
								variant="outlined"
								fullWidth
								size="small"
								{...getFieldProps("address")}
							/>
							<ErrorMessage
								name="address"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</Stack>

						<Stack
							sx={{
								flexDirection: { xs: "column", sm: "row" },
								alignItems: { sm: "center" },
								justifyContent: { sm: "space-between" },
								gap: { xs: 0.5, sm: 0 },
							}}
						>
							<FormControlLabel
								control={<Checkbox size="small" />}
								label="Remember me"
							/>
							<Typography
								variant="body2"
								color="#d4af38"
								sx={{ cursor: "pointer" }}
							>
								Forgot password?
							</Typography>
						</Stack>

						<Button
							variant="contained"
							type="submit"
							fullWidth
							sx={{
								bgcolor: "#d4af38",
								border: "none",
								py: 1.25,
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								fontSize: "13px",
								"&:hover": { bgcolor: "#b8960b" },
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
