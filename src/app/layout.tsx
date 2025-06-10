import { Stack } from "@mui/material";
import "./globals.css";
import Navbar from "@/components/_common/Navbar/Navbar";
import ThemeRegistry from "./ThemeRegistry";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Suspense fallback={<Loading />}>
          <ThemeRegistry>
            <Stack>
              <Navbar />
            </Stack>
            <Stack component={'main'} position={'absolute'}>
              {children}
            </Stack>
          </ThemeRegistry>
        </Suspense>
      </body>
    </html>
  );
}
