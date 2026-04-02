"use client";

import { Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { playfair_display, raleway } from "@/providers/ThemeRegistry";
import Image from "next/image";

const OrdersTab = () => {
	const { auth } = useContext(AuthContext);

	return (
		<Stack>
			<Typography
				sx={{ fontFamily: playfair_display.style.fontFamily }}
				variant="h6"
				color="#1a1a1a"
				marginBottom={2}
			>
				Order History
			</Typography>

			{auth.userData?.order ? (
				<Stack spacing={4}>
					{auth.userData.order.map((data) => (
						<Stack key={data.id}>
							{/* Head */}
							<Stack
								sx={{
									flexDirection: { xs: "column", sm: "row" },
									justifyContent: "space-between",
									alignItems: { xs: "flex-start", sm: "center" },
									gap: { xs: 1, sm: 0 },
									bgcolor: "#f5f5f5",
									border: "1px solid #e0e0e0",
									borderTopLeftRadius: "4px",
									borderTopRightRadius: "4px",
									padding: { xs: 2, sm: 3 },
								}}
							>
								<Stack spacing={1}>
									<Typography
										fontSize="0.9rem"
										fontFamily={raleway.style.fontFamily}
										fontWeight={500}
									>
										Order {data.id}
									</Typography>
									<Typography fontSize="0.8rem" color="#666">
										{data.order_date}
									</Typography>
								</Stack>
								<Typography
									bgcolor="#e6f7e6"
									color="#2e8b57"
									padding="4px 8px"
									fontSize="0.8rem"
									fontWeight={500}
									borderRadius="4px"
									sx={{ alignSelf: { xs: "flex-start", sm: "auto" } }}
								>
									{data.status}
								</Typography>
							</Stack>

							{/* Body */}
							<Stack
								sx={{
									flexDirection: { xs: "column", sm: "row" },
									justifyContent: "space-between",
									alignItems: { xs: "flex-start", sm: "center" },
									gap: { xs: 2, sm: 0 },
									padding: { xs: 2, sm: 3 },
									border: "1px solid #e0e0e0",
								}}
							>
								<Stack flexDirection="row" columnGap={3} alignItems="center">
									<Image
										src={data.img}
										alt="Order item"
										width={80}
										height={80}
										style={{
											objectFit: "cover",
											borderRadius: "4px",
											border: "1px solid #e0e0e0",
											flexShrink: 0,
										}}
									/>
									<Stack spacing={1}>
										<Typography
											fontFamily={raleway.style.fontFamily}
											fontWeight={500}
										>
											{data.name}
										</Typography>
										<Typography
											fontFamily={raleway.style.fontFamily}
											color="#666"
											fontSize="0.9rem"
										>
											{data.description}
										</Typography>
									</Stack>
								</Stack>
								<Typography sx={{ fontWeight: 500 }}>${data.price}</Typography>
							</Stack>

							{/* Footer */}
							<Stack
								sx={{
									flexDirection: { xs: "column", sm: "row" },
									borderBottomLeftRadius: "4px",
									borderBottomRightRadius: "4px",
									padding: { xs: 2, sm: 3 },
									border: "1px solid #e0e0e0",
									justifyContent: "flex-end",
									gap: 1,
								}}
							>
								<Button
									variant="contained"
									fullWidth={false}
									sx={{ flex: { xs: 1, sm: "none" } }}
								>
									View Details
								</Button>
								<Button
									variant="contained"
									fullWidth={false}
									sx={{ flex: { xs: 1, sm: "none" } }}
								>
									Buy Again
								</Button>
							</Stack>
						</Stack>
					))}
				</Stack>
			) : (
				<Typography>No Order Found</Typography>
			)}
		</Stack>
	);
};

export default OrdersTab;
