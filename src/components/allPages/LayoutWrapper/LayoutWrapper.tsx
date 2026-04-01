"use client";

import { Stack } from "@mui/material";
import "@/app/globals.css";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";
import Navbar from "@/components/_common/Navbar/Navbar";
import AuthContextProvider from "@/context/AuthContext";
import ThemeRegistry from "@/providers/ThemeRegistry";

export default function LayoutWrapper({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isAuth = pathname.startsWith("/auth");
	return (
		<Suspense fallback={<Loading />}>
			<AuthContextProvider>
				<ThemeRegistry>
					{!isAuth && (
						<Stack>
							<Navbar />
						</Stack>
					)}
					<Stack
						component={"main"}
						position={!isAuth ? "absolute" : "static"}
						sx={{ paddingTop: !isAuth ? "80px" : "", flexGrow: 1 }}
					>
						{children}
					</Stack>
				</ThemeRegistry>
			</AuthContextProvider>
		</Suspense>
	);
}
