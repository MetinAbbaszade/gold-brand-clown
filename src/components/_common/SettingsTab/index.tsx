"use client";
import {
	Box,
	Button,
	FormControlLabel,
	Stack,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { raleway } from "@/providers/ThemeRegistry";

export default function SettingsTab({ onSubmit = () => {} }) {
	const [emailUpdates, setEmailUpdates] = useState(true);
	const [orderUpdates, setOrderUpdates] = useState(true);

	const NotificationRow = ({
		title,
		description,
		checked,
		onChange,
	}: {
		title: string;
		description: string;
		checked: boolean;
		onChange: () => void;
	}) => (
		<Stack
			sx={{
				flexDirection: { xs: "column", sm: "row" },
				justifyContent: "space-between",
				alignItems: { xs: "flex-start", sm: "center" },
				gap: { xs: 1, sm: 2 },
				mb: "1.5rem",
			}}
		>
			<Box>
				<Typography
					component="h5"
					sx={{ fontWeight: 500, fontSize: "1rem", mb: "2px" }}
				>
					{title}
				</Typography>
				<Typography sx={{ color: "#666", fontSize: "0.85rem" }}>
					{description}
				</Typography>
			</Box>
			<FormControlLabel
				control={
					<Switch
						checked={checked}
						onChange={onChange}
						sx={{
							"& .MuiSwitch-switchBase.Mui-checked": {
								color: "#fff",
								"& + .MuiSwitch-track": { backgroundColor: "#d4af37" },
							},
							"& .MuiSwitch-track": {
								borderRadius: 34,
								backgroundColor: "#e0e0e0",
							},
						}}
					/>
				}
				label=""
				sx={{ mr: 0 }}
			/>
		</Stack>
	);

	return (
		<Box component="section">
			<Typography
				component="h3"
				sx={{ fontSize: "1.5rem", fontWeight: 600, mb: "2rem" }}
			>
				Account Settings
			</Typography>

			<Stack
				component="form"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				{/* Notifications */}
				<Box
					sx={{ mb: "2rem", pb: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
				>
					<Typography
						component="h4"
						sx={{
							fontFamily: raleway.style.fontFamily,
							fontWeight: 500,
							fontSize: "1.1rem",
							mb: "1.5rem",
							color: "#1a1a1a",
						}}
					>
						Notifications
					</Typography>
					<NotificationRow
						title="Email Updates"
						description="Receive updates about new products and exclusive offers"
						checked={emailUpdates}
						onChange={() => setEmailUpdates((t) => !t)}
					/>
					<NotificationRow
						title="Order Updates"
						description="Get notifications about your order status"
						checked={orderUpdates}
						onChange={() => setOrderUpdates((t) => !t)}
					/>
				</Box>

				{/* Security */}
				<Box
					sx={{ mb: "2rem", pb: "1.5rem", borderBottom: "1px solid #e0e0e0" }}
				>
					<Typography
						component="h4"
						sx={{
							fontFamily: raleway.style.fontFamily,
							fontWeight: 500,
							fontSize: "1.1rem",
							mb: "1.5rem",
							color: "#1a1a1a",
						}}
					>
						Security
					</Typography>
					{[
						{ id: "currentPassword", label: "Current Password" },
						{ id: "newPassword", label: "New Password" },
						{ id: "confirmPassword", label: "Confirm New Password" },
					].map(({ id, label }) => (
						<Box key={id} sx={{ mb: "1.5rem" }}>
							<Typography
								component="label"
								htmlFor={id}
								sx={{
									display: "block",
									fontSize: "0.9rem",
									mb: "0.5rem",
									color: "#666",
									fontWeight: 500,
								}}
							>
								{label}
							</Typography>
							<TextField
								id={id}
								type="password"
								fullWidth
								size="small"
								variant="outlined"
								sx={{
									"& .MuiOutlinedInput-root": {
										borderRadius: "4px",
										"& fieldset": { borderColor: "#e0e0e0" },
										"&:hover fieldset": { borderColor: "#e0e0e0" },
										"&.Mui-focused fieldset": {
											borderColor: "#d4af37",
											boxShadow: "0 0 0 2px rgba(212,175,55,0.2)",
										},
									},
									fontFamily: raleway.style.fontFamily,
								}}
							/>
						</Box>
					))}
				</Box>

				<Button
					type="submit"
					fullWidth
					sx={{
						background: "linear-gradient(to right, #9e7c0c, #d4af37)",
						color: "#fff",
						py: "1rem",
						borderRadius: "4px",
						fontFamily: raleway.style.fontFamily,
						fontWeight: 500,
						letterSpacing: "0.5px",
						mt: "1.5rem",
						transition: "0.3s ease",
						"&:hover": {
							background: "linear-gradient(to right, #d4af37, #f2e6c2)",
							transform: "translateY(-2px)",
							boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
						},
					}}
				>
					Update Settings
				</Button>
			</Stack>
		</Box>
	);
}
