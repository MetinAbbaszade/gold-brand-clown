"use client";

import React from "react";
import { Box, CircularProgress, Typography, styled } from "@mui/material";

const LoadingContainer = styled(Box)({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	minHeight: "100vh",
	minWidth: "100vw",
	background: "#fff",
	color: "#B8860B",
});

const LoadingText = styled(Typography)({
	marginTop: "16px",
	fontSize: "1.2rem",
	fontWeight: 600,
	color: "#B8860B",
});

const LoadingPage = () => {
	return (
		<LoadingContainer>
			<CircularProgress size={60} thickness={5} sx={{ color: "#B8860B" }} />
			<LoadingText variant="h6">Crafting your golden experience...</LoadingText>
		</LoadingContainer>
	);
};

export default LoadingPage;
