export type MainCollection = {
	name: string;
	description: string;
	prodName: string;
	price: number;
	imageUrl: string;
};

export const mainCollections: MainCollection[] = [
	{
		name: "Celestial",
		description: "First Description",
		prodName: "Luna Drop Earrings",
		price: 500,
		imageUrl:
			"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
	},
	{
		name: "Romance",
		description: "Second Description",
		prodName: "Luna Drop Rings",
		price: 850,
		imageUrl:
			"https://images.unsplash.com/photo-1476965805533-564543966f62?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Floral",
		description: "Third Description",
		prodName: "Luna Drop Earrings",
		price: 700,
		imageUrl:
			"https://images.unsplash.com/photo-1607703829739-c05b7beddf60?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Royal",
		description: "Fourth Description",
		prodName: "Luna Drop Rings",
		price: 999,
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1674748385760-d846825598ab?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];
