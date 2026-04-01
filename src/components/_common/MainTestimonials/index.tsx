"use client";

import { Divider, Stack, Typography } from "@mui/material";
import type { NextFont } from "next/dist/compiled/@next/font";
import { useEffect, useState } from "react";
import { MotionStack } from "../HeroSection";
import { containerFramer } from "../MainAboutSection";

interface IProp {
	playfair: NextFont;
	testimonialsData: any;
}

const MainTestimonials: React.FC<IProp> = ({ playfair, testimonialsData }) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((i) => (i += 1) % testimonialsData.length);
		}, 2000);

		return () => clearInterval(timer);
	}, [testimonialsData.length]);
	return (
		<MotionStack
			variants={containerFramer}
			initial={"offscreen"}
			whileInView={"onscreen"}
			viewport={{ once: true, amount: 0.5 }}
			width={{ xs: "92%", sm: "80%", md: "800px" }} // ✅ was always 800px — overflows on small screens
			m="0 auto"
			textAlign={"center"}
			spacing={4}
		>
			<Stack alignItems={"center"}>
				<Typography variant="h4" fontFamily={playfair.style.fontFamily} mb={2}>
					Client Appreciation
				</Typography>
				<Divider
					sx={{
						bgcolor: "gold",
						width: "60px",
					}}
				/>
				<Typography mt={1}>Treasured words from our value clients</Typography>
			</Stack>
			<Stack spacing={3}>
				<Typography
					fontFamily={playfair.style.fontFamily}
					fontSize={"24px"}
					fontStyle={"italic"}
				>
					"{testimonialsData[index].comment}"
				</Typography>
				<Stack
					direction={"row"}
					justifyContent={"center"}
					alignItems={"center"}
					spacing={0.3}
				>
					<Divider
						sx={{
							width: "15px",
							bgcolor: "#666",
						}}
					/>
					<Typography color="#666" variant="body1">
						{testimonialsData[index].name}
					</Typography>
				</Stack>
			</Stack>
			<Stack direction={"row"} spacing={2} justifyContent={"center"}>
				{[...Array(testimonialsData.length).keys()].map((i) => (
					<Stack
						key={i}
						width={10}
						height={10}
						border={"none"}
						borderRadius={"50%"}
						bgcolor={i === index ? "gold" : "#e0e0e0"}
					/>
				))}
			</Stack>
		</MotionStack>
	);
};

export default MainTestimonials;
