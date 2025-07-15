import { Prompt } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "013 Favorite Sports",
  description: "A simple website to share leo favorite sports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${promptFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
