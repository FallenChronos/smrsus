import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Source_Serif_4({
    subsets: ["latin"],
    variable: "--font-display",
    weight: ["400", "500", "600", "700"]
});

const body = Source_Sans_3({
    subsets: ["latin"],
    variable: "--font-body"
});

export const metadata: Metadata = {
    title: "Smt. Meera Rani Samajik Utthan Sansthan",
    description:
        "A clean NGO website for healthcare, school camps, rural outreach, certifications, awards, and community impact.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${display.variable} ${body.variable}`}>{children}</body>
        </html>
    );
}