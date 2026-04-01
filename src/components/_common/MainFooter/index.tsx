import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { type IProp, MotionStack } from "../HeroSection";
import { containerFramer } from "../MainAboutSection";

const datas = {
	Collections: ["Celestial", "Heritage", "Bespoke", "Bridal"],
	Products: ["Contact Us", "Book Appointment", "Care Guide", "FAQ"],
	Legal: [
		"Privacy Policy",
		"Terms of Service",
		"Shipping Policy",
		"Returns & Exchanges",
	],
};

const MainFooter: React.FC<IProp> = ({ playfair }) => {
	return (
		<MotionStack
			variants={containerFramer}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.3 }}
			bgcolor="#f8f8f8"
			height={{ xs: "auto", md: "300px" }} // ✅ fixed 300px clips content on mobile
			justifyContent="center"
			py={{ xs: 5, md: 0 }}
		>
			<Stack
				direction={{ xs: "column", md: "row" }} // ✅ was always row — wraps badly on mobile
				spacing={{ xs: 4, md: 20 }} // ✅ huge spacing: 20 → responsive
				justifyContent="center"
				alignItems={{ xs: "flex-start", md: "center" }}
				px={{ xs: 4, md: 0 }}
			>
				{/* Brand block */}
				<Stack spacing={2}>
					<Typography
						fontFamily={playfair?.style.fontFamily}
						variant="h5"
						letterSpacing={2}
						fontWeight={100}
					>
						GOLDBRAND
					</Typography>
					<Typography variant="body2">Timeless elegance since 1896</Typography>
					<Stack direction="row" spacing={2}>
						<InstagramIcon />
						<FacebookIcon />
						<PinterestIcon />
					</Stack>
				</Stack>

				{/* Links block */}
				<Stack
					direction={{ xs: "column", sm: "row" }} // ✅ wrap on mobile
					spacing={{ xs: 3, sm: 6, md: 15 }} // ✅ huge spacing: 15 → responsive
					flexWrap="wrap"
				>
					{Object.entries(datas).map(([key, value]) => (
						<Stack key={key} spacing={1}>
							<Typography
								component={Link}
								variant="h6"
								fontFamily={playfair?.style.fontFamily}
								href={`/${key.toLowerCase()}`}
							>
								{key}
							</Typography>
							<Divider sx={{ width: "25px", bgcolor: "gold" }} />
							<Stack>
								{value.map((v) => (
									<Link href={`/${key.toLowerCase()}`} key={v}>
										<Typography
											mb="10px"
											sx={{ color: "#666", fontSize: "14px", fontWeight: 400 }}
										>
											{v}
										</Typography>
									</Link>
								))}
							</Stack>
						</Stack>
					))}
				</Stack>
			</Stack>
		</MotionStack>
	);
};

export default MainFooter;
