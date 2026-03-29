'use client';
import './globals.css';
import { Inter, Outfit } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import { AuthProvider, useAuth } from '../context/AuthContext';
import LoginPage from './login/page';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

function AppContent({ children }) {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          <AppContent>
            {children}
          </AppContent>
        </AuthProvider>
      </body>
    </html>
  );
}
