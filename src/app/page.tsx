import MainPageCom from "@/components/allPages/MainPageCom/page";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home Page | Timeless Elegance",
};

export default function Home() {
	return <MainPageCom />;
}
