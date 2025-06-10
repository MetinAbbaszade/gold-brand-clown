import { Stack } from "@mui/material";
import "./globals.css";
import Navbar from "@/components/_common/Navbar/Navbar";
import ThemeRegistry from "./ThemeRegistry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeRegistry>
          <Stack>
            <Navbar />
          </Stack>
          <Stack component={'main'} position={'absolute'}>
            {children}
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
