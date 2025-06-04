import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from "next/link"
import { Playfair_Display } from "next/font/google";
import React from "react";

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400'
})

interface INavItems {
    href: string
    text: string
}

const navItems: Array<INavItems> = [
    {
        href: '/',
        text: 'Home'
    },
    {
        href: '/collections',
        text: 'Collections'
    },
    {
        href: 'products',
        text: 'Products'
    }
]

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{ bgcolor: 'background.paper', color: 'text.primary', minHeight: '80px', justifyContent: 'center' }}>
            <Toolbar sx={{ justifyContent: 'space-around' }}>

                {/* Left Side */}
                <Typography
                    variant='h5'
                    component="div"
                    sx={{
                        fontFamily: playfair.style.fontFamily,
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        cursor: 'pointer',
                    }}
                >
                    <Link href="/">
                        goldbrand
                    </Link>
                </Typography>

                {/* Center Side */}
                <Stack direction={'row'} spacing={3}>
                    {navItems.map((item) => (
                        <Link href={item.href} key={item.text}>{item.text}</Link>
                    ))}
                </Stack>

                {/* Right Side */}
                <Stack direction="row" spacing={1}>
                    <IconButton color="inherit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <IconButton component={Link} href="/profile" color="inherit">
                        <PersonOutlineIcon />
                    </IconButton>
                    <IconButton component={Link} href="/cart" color="inherit">
                        <ShoppingBagIcon />
                    </IconButton>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar