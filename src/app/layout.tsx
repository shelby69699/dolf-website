import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '$DOLF - King of Cardano Ocean',
  description: 'The first viral fish token on Cardano',
  icons: {
    icon: '/dolf-character.png',
  },
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
        <meta name="theme-color" content="#06b6d4" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
