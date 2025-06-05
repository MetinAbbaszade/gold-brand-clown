import { Stack } from "@mui/material";
import "./globals.css";
import Navbar from "@/components/_common/Navbar";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: montserrat.style.fontFamily }}>
        <Stack>
          <Navbar />
        </Stack>
        <Stack component={'main'} position={'absolute'}>
          {children}
        </Stack>
      </body>
    </html>
  );
}
