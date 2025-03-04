"use client";

import './globals.css';
import Header from '@/components/header';

export const metadata = {
    title: "My Next.js App",
    description: "This is a sample Next.js application",
    icons: {
        icon: "./../public/favicon.png",
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
