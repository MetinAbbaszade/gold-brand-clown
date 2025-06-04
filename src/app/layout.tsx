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
      <body className={montserrat.className} style={{ margin: 0 }}>
        <Stack>
          <Navbar />
        </Stack>
        <Stack component={'main'} top={'80px'} position={'absolute'}>
          {children}
        </Stack>
      </body>
    </html>
  );
}
