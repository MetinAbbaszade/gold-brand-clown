import LayoutWrapper from "@/components/allPages/LayoutWrapper/LayoutWrapper";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ margin: 0 }}>
				<LayoutWrapper>{children}</LayoutWrapper>
			</body>
		</html>
	);
}
