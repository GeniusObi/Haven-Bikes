import type { Metadata } from 'next';
import { Inter, Poppins, DM_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import Providers from './Providers';
import { ClerkProvider } from '@clerk/nextjs';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600'] });

export const metadata: Metadata = {
  title: 'Haven Bikes',
  description: 'Ecommerce app for nextjs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <Providers>
            <Navbar />
            <Container className="py-20 ">{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
