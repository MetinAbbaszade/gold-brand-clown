import {
	heroContainerVariants,
	MotionStack,
} from "@/components/_common/HeroSection";
import CollectionsPage from "@/components/allPages/CollectionsPage";
import { playfair } from "@/components/allPages/MainPageCom/page";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Collections",
};

const page = () => {
	return <CollectionsPage />;
};

export default page;
