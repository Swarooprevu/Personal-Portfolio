import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Narasimha Swaroop Revu - Data Analyst", description: "Portfolio of Narasimha Swaroop Revu" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body>{children}</body></html>; }
