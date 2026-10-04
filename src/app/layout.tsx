import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={poppins.className}>
			<body>{children}</body>
		</html>
	);
}
