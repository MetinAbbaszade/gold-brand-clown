"use client";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Button, Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
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
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/collections",
		text: "Collections",
	},
	{
		href: "/products",
		text: "Products",
	},
];

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();
	const { auth, logOutFunction } = useContext(AuthContext);
	return (
		<AppBar
			position="fixed"
			sx={{
				bgcolor: "background.paper",
				color: "text.primary",
				minHeight: "80px",
				justifyContent: "center",
				width: "100%",
				zIndex: (theme) => theme.zIndex.appBar, // Ensures it's above other content
			}}
		>
			<Toolbar sx={{ justifyContent: "space-around" }}>
				{/* Left Side */}
				<Typography
					variant="h5"
					component="div"
					sx={{
						fontFamily: playfair.style.fontFamily,
						textTransform: "uppercase",
						letterSpacing: "3px",
						cursor: "pointer",
					}}
				>
					<Link href="/">goldbrand</Link>
				</Typography>

				{/* Center Side */}
				<Stack direction={"row"} spacing={3}>
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Stack key={item.text}>
								<Link href={item.href} key={item.text}>
									<Typography
										textTransform={"uppercase"}
										letterSpacing={"1px"}
										color={isActive ? "#d4af36" : "inherit"}
									>
										{item.text}
									</Typography>
								</Link>
								{isActive ? <Divider sx={{ bgcolor: "gold" }} /> : null}
							</Stack>
						);
					})}
				</Stack>

				{/* Right Side */}
				<Stack
					direction="row"
					spacing={1}
					alignItems={"center"}
					gap={5}
					justifySelf={"flex-end"}
				>
					<Stack direction={"row"}>
						{auth.token && (
							<IconButton
								component={Link}
								href={auth.userData ? "/profile" : "/auth"}
								color="inherit"
							>
								<PersonOutlineIcon />
							</IconButton>
						)}
						{auth.userData && (
							<IconButton component={Link} href="/cart" color="inherit">
								<ShoppingBagIcon />
							</IconButton>
						)}
					</Stack>
					<Stack>
						{auth.userData ? (
							<Button
								variant="contained"
								type="submit"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={logOutFunction}
							>
								LogOut
							</Button>
						) : (
							<Button
								variant="contained"
								type="submit"
								sx={{ bgcolor: "#d4af38", border: "none" }}
								onClick={() => router.push("/auth")}
							>
								Login
							</Button>
						)}
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
