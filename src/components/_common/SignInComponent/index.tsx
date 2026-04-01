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
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import * as Yup from "yup";
import fetchUserByEmail, { type FetchUserResponse } from "@/api/user";
import { AuthContext } from "@/context/AuthContext";

interface LoginFormValues {
	username: string;
	password: string;
}

const initialValues: LoginFormValues = { username: "", password: "" };

const validationSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	password: Yup.string().required("Password is required"),
});

const typographyVariant = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const MotionTypography = motion(Typography);

const SignInComponent = () => {
	const { loginFunction } = useContext(AuthContext);
	const [authError, setAuthError] = useState<string | null>(null);

	const handleSubmit = async (values: LoginFormValues) => {
		setAuthError(null);
		const result: FetchUserResponse = await fetchUserByEmail(values);
		if ("msg" in result) {
			setAuthError(result.msg);
		} else {
			loginFunction(result.data);
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
					<Stack spacing={3}>
						{authError && (
							<MotionTypography
								variants={typographyVariant}
								initial="hidden"
								animate="visible"
								color="error"
								fontSize="0.9rem"
							>
								{authError}
							</MotionTypography>
						)}

						<Stack>
							<TextField
								variant="outlined"
								name="username"
								type="text"
								placeholder="Username"
								fullWidth
								size="small"
								value={values.username}
								onChange={(e) => {
									setAuthError(null);
									handleChange(e);
								}}
								onBlur={handleBlur}
							/>
							<ErrorMessage
								name="username"
								component="div"
								className="text-red-500 text-sm mt-1"
							/>
						</Stack>

						<Stack>
							<TextField
								variant="outlined"
								name="password"
								type="password"
								placeholder="Enter your password"
								fullWidth
								size="small"
								value={values.password}
								onChange={(e) => {
									setAuthError(null);
									handleChange(e);
								}}
								onBlur={handleBlur}
							/>
							<ErrorMessage
								name="password"
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
							Login
						</Button>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

export default SignInComponent;
