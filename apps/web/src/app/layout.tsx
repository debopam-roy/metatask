import '../styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata: Metadata = {
  title: 'MetaTask - AI Freelancing Platform',
  description: 'A decentralized freelancing platform powered by blockchain and AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-light-200 text-light-900 dark:bg-dark-700 dark:text-light-100 transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 