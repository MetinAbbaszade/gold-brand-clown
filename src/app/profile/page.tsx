import type { Metadata } from "next";
import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import ProfilePageComponent from "@/components/allPages/ProfilePageComponent";

export const metadata: Metadata = { title: "Profile" };

const page = async () => {
	return (
		<MotionStack
			variants={heroContainerVariants}
			initial="hidden"
			animate="visible"
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				px: { xs: 2, sm: 3 },
				py: { xs: 3, md: 5 },
			}}
		>
			<ProfilePageComponent />
		</MotionStack>
	);
};

export default page;
