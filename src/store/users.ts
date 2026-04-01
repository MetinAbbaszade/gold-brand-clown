import type { User } from "@/api/user";

export const users: User[] = [
	{
		id: 1,
		username: "john",
		email: "johndoe@gmail.com",
		password: "Password123!",
		address: "123 Main St, Springfield, USA",
		order: [
			{
				id: "order1",
				order_date: "07.08.2025",
				status: "Delivered",
				img: "https://www.pix-star.com/blog/wp-content/uploads/2021/05/digital-photo-frames.jpg",
				name: "GoldBrand",
				description: "Description",
				price: 3.499,
			},
		],
		wishlist: [],
	},
	{
		id: 2,
		username: "Metin",
		password: "12345678",
		email: "metinabbaszade@yahoo.com",
		address: "metin@baku",
	},
];
