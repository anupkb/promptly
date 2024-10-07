import type { Metadata } from "next";
import "../styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata: Metadata = {
  title: "Promptly",
  description:
    "Discover and share AI-driven prompts for your daily tasks, empowering creativity and productivity with the right prompts in the right moment.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main"></div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
