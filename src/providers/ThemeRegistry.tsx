'use client';

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';


const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: montserrat.style.fontFamily,
    },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
}