"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import {
	Badge,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import CartDialog from "@/components/_common/CartDialog";
import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/AuthContext";

export const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: "400",
});

interface INavItems {
	href: string;
	text: string;
}

const navItems: Array<INavItems> = [
	{ href: "/", text: "Home" },
	{ href: "/collections", text: "Collections" },
	{ href: "/products", text: "Products" },
];

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { auth, logOutFunction } = useContext(AuthContext);
	const { itemCount } = useContext(CartContext);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleDrawer = () => setDrawerOpen((prev) => !prev);

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					bgcolor: "background.paper",
					color: "text.primary",
					minHeight: "80px",
					justifyContent: "center",
					width: "100%",
					zIndex: (theme) => theme.zIndex.appBar,
				}}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
						px: { xs: 2, sm: 3, md: 4 },
						minHeight: "80px !important",
					}}
				>
					{/* Logo */}
					<Typography
						variant="h5"
						component="div"
						sx={{
							fontFamily: playfair.style.fontFamily,
							textTransform: "uppercase",
							letterSpacing: "3px",
							cursor: "pointer",
							fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
						}}
					>
						<Link href="/">goldbrand</Link>
					</Typography>

					{/* Desktop Nav */}
					<Stack
						direction="row"
						spacing={3}
						sx={{ display: { xs: "none", md: "flex" } }}
					>
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Stack key={item.text}>
									<Link href={item.href}>
										<Typography
											textTransform="uppercase"
											letterSpacing="1px"
											color={isActive ? "#d4af36" : "inherit"}
										>
											{item.text}
										</Typography>
									</Link>
									{isActive && <Divider sx={{ bgcolor: "gold" }} />}
								</Stack>
							);
						})}
					</Stack>

					{/* Desktop Right Actions */}
					<Stack
						direction="row"
						spacing={1}
						alignItems="center"
						gap={2}
						sx={{ display: { xs: "none", md: "flex" } }}
					>
						{auth.token && (
							<Link href={auth.userData ? "/profile" : "/auth"}>
								<IconButton color="inherit">
									<PersonOutlineIcon />
								</IconButton>
							</Link>
						)}
						<IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
							<Badge badgeContent={itemCount} color="warning">
								<ShoppingBagOutlinedIcon />
							</Badge>
						</IconButton>
						{auth.userData ? (
							<Button
								variant="contained"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={logOutFunction}
							>
								LogOut
							</Button>
						) : (
							<Button
								variant="contained"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={() => router.push("/auth")}
							>
								Login
							</Button>
						)}
					</Stack>

					{/* Mobile: profile icon + hamburger */}
					<Stack
						direction="row"
						alignItems="center"
						sx={{ display: { xs: "flex", md: "none" } }}
					>
						{auth.token && (
							<Link href={auth.userData ? "/profile" : "/auth"}>
								<IconButton color="inherit">
									<PersonOutlineIcon />
								</IconButton>
							</Link>
						)}
						<IconButton color="inherit" onClick={() => setIsCartOpen(true)}>
							<Badge badgeContent={itemCount} color="warning">
								<ShoppingBagOutlinedIcon />
							</Badge>
						</IconButton>
						<IconButton color="inherit" onClick={toggleDrawer} edge="end">
							{drawerOpen ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>

			{/* Mobile Drawer */}
			<Drawer
				anchor="top"
				open={drawerOpen}
				onClose={toggleDrawer}
				sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						top: "80px",
						bgcolor: "background.paper",
						boxShadow: 3,
					},
				}}
			>
				<List>
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link href={item.href} key={item.text}>
								<ListItem
									onClick={toggleDrawer}
									sx={{
										borderLeft: isActive
											? "3px solid #d4af36"
											: "3px solid transparent",
										color: isActive ? "#d4af36" : "text.primary",
									}}
								>
									<ListItemText
										primary={item.text}
										primaryTypographyProps={{
											textTransform: "uppercase",
											letterSpacing: "1px",
											fontSize: "0.9rem",
										}}
									/>
								</ListItem>
							</Link>
						);
					})}

					{/* Auth button in drawer */}
					<ListItem sx={{ pt: 1, pb: 2 }}>
						{auth.userData ? (
							<Button
								fullWidth
								variant="contained"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={() => {
									logOutFunction();
									toggleDrawer();
								}}
							>
								LogOut
							</Button>
						) : (
							<Button
								fullWidth
								variant="contained"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={() => {
									router.push("/auth");
									toggleDrawer();
								}}
							>
								Login
							</Button>
						)}
					</ListItem>
				</List>
			</Drawer>
			<CartDialog open={isCartOpen} onClose={() => setIsCartOpen(false)} />
		</>
	);
};

export default Navbar;
