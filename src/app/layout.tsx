import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '$DOLF - The King of Cardano Ocean',
  description: 'Join the $DOLF movement in the Cardano ecosystem. The ultimate meme coin bringing fun and prosperity to the Cardano Ocean.',
  icons: {
    icon: '/dolf-character.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06B6D4" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
