import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Promptly",
  description:
    "Discover and share AI-driven prompts for your daily tasks, empowering creativity and productivity with the right prompts in the right moment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
