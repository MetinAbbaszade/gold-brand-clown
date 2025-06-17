'use client';

import { Stack } from "@mui/material";
import "@/app/globals.css";
import Navbar from "@/components/_common/Navbar/Navbar";
import ThemeRegistry from "@/providers/ThemeRegistry";
import { Suspense } from "react";
import Loading from "@/app/loading";
import AuthContextProvider from "@/context/AuthContext";
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const isAuth = pathname.startsWith('/auth');
    return (
        <>
            <Suspense fallback={<Loading />}>
                <AuthContextProvider>
                    <ThemeRegistry>
                        {
                            !isAuth && <Stack>
                                <Navbar />
                            </Stack>
                        }
                        <Stack component={'main'} position={!isAuth ? 'absolute' : 'static'}>
                            {children}
                        </Stack>
                    </ThemeRegistry>
                </AuthContextProvider>
            </Suspense>
        </>
    );
}