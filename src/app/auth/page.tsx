import { Stack } from "@mui/material";
import type { Metadata } from "next";
import AuthPage from "@/components/allPages/AuthPage";

export const metadata: Metadata = {
	title: "Welcome Boy!",
};

const page = () => {
	return (
		<Stack
			minHeight={"100vh"}
			justifyContent={"center"}
			alignItems={"center"}
			bgcolor={"#f9f6f0"}
		>
			<AuthPage />
		</Stack>
	);
};

export default page;
