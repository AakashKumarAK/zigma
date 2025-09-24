import type { Metadata } from "next";
import "./globals.css";
import Header from "./Customcomponents/header";
import FooterPage from "./Customcomponents/footer"; // Adjust the path if needed



export const metadata: Metadata = {
  title: "Zigma Clone",
  description: "Replicating Zigma website in Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Header (Navbar) */}
        <Header/>

        {/* Page Content */}
        <main className="">{children}</main>
        {/* Add Footer later */}
        <FooterPage/>
      </body>
    </html>
  );
}
