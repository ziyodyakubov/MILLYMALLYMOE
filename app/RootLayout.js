"use client";

import './globals.css';
import Header from '@/components/Header';

export const metadata = {
    title: "My Next.js App",
    description: "This is a sample Next.js application",
    icons: {
      icon: "./../public/favicon.png", // Path to your favicon in the public folder
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
