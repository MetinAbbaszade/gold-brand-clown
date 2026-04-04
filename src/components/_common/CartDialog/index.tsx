"use client";

import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogContent,
	Divider,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { playfair_display, raleway } from "@/providers/ThemeRegistry";

interface CartDialogProps {
	open: boolean;
	onClose: () => void;
}

const formatPrice = (value: number) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);

const CartDialog = ({ open, onClose }: CartDialogProps) => {
	const {
		cartItems,
		itemCount,
		subtotal,
		increaseQuantity,
		decreaseQuantity,
		removeFromCart,
		clearCart,
	} = useContext(CartContext);

	return (
		<Dialog
			open={open}
			onClose={onClose}
			fullWidth
			maxWidth="sm"
			PaperProps={{
				sx: {
					borderRadius: "16px",
					overflow: "hidden",
				},
			}}
		>
			<Box
				sx={{
					p: { xs: 2.5, sm: 3 },
					background:
						"linear-gradient(120deg, rgba(212,175,55,0.12), rgba(255,255,255,1))",
				}}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Box>
						<Typography
							fontFamily={playfair_display.style.fontFamily}
							sx={{
								fontSize: { xs: "1.4rem", sm: "1.8rem" },
								letterSpacing: "1px",
							}}
						>
							Your Cart
						</Typography>
						<Typography color="text.secondary" fontSize="0.9rem">
							{itemCount} item{itemCount === 1 ? "" : "s"} selected
						</Typography>
					</Box>
					<Button onClick={clearCart} sx={{ color: "#9e7c0c" }}>
						Clear all
					</Button>
				</Stack>
			</Box>

			<DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
				{cartItems.length === 0 ? (
					<Stack alignItems="center" justifyContent="center" py={5} spacing={1}>
						<Typography fontWeight={600}>Your cart is empty</Typography>
						<Typography color="text.secondary" textAlign="center">
							Add your favorite jewelry and it will appear here.
						</Typography>
					</Stack>
				) : (
					<Stack spacing={2}>
						{cartItems.map((item) => (
							<Stack key={item.productId}>
								<Stack direction="row" spacing={2} alignItems="center">
									<Avatar
										src={item.image}
										variant="rounded"
										sx={{ width: 72, height: 72, borderRadius: "10px" }}
									/>
									<Stack flex={1} spacing={0.4}>
										<Typography fontWeight={600}>{item.name}</Typography>
										<Typography fontSize="0.82rem" color="text.secondary">
											{item.collection} Collection
										</Typography>
										<Typography
											fontFamily={raleway.style.fontFamily}
											color="#9e7c0c"
											fontWeight={700}
										>
											{formatPrice(item.price)}
										</Typography>
									</Stack>
									<Stack direction="row" alignItems="center" spacing={0.5}>
										<IconButton
											onClick={() => decreaseQuantity(item.productId)}
											sx={{ border: "1px solid #e0e0e0" }}
										>
											<RemoveIcon fontSize="small" />
										</IconButton>
										<Typography width="20px" textAlign="center">
											{item.quantity}
										</Typography>
										<IconButton
											onClick={() => increaseQuantity(item.productId)}
											sx={{ border: "1px solid #e0e0e0" }}
										>
											<AddIcon fontSize="small" />
										</IconButton>
										<IconButton
											onClick={() => removeFromCart(item.productId)}
											color="error"
										>
											<DeleteOutlineIcon fontSize="small" />
										</IconButton>
									</Stack>
								</Stack>
								<Divider sx={{ mt: 1.5 }} />
							</Stack>
						))}
					</Stack>
				)}
			</DialogContent>

			<Stack sx={{ p: { xs: 2, sm: 3 }, pt: 0 }} spacing={1.5}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography color="text.secondary">Subtotal</Typography>
					<Typography fontWeight={700} fontSize="1.2rem" color="#9e7c0c">
						{formatPrice(subtotal)}
					</Typography>
				</Stack>
				<Button
					variant="contained"
					disabled={cartItems.length === 0}
					sx={{
						py: 1.2,
						bgcolor: "#d4af37",
						color: "#1a1a1a",
						fontWeight: 700,
						textTransform: "none",
						borderRadius: "12px",
						"&:hover": { bgcolor: "#c19b2c" },
					}}
				>
					Proceed to Checkout
				</Button>
			</Stack>
		</Dialog>
	);
};

export default CartDialog;
