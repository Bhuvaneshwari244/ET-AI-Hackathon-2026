'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [signalHistory, setSignalHistory] = useState([
    { id: 1, type: 'INSIDER', company: 'Reliance Ind.', action: 'Buy', details: 'MD & CEO bought 50,000 shares', time: '11:30 AM', date: 'Mar 29, 2026' },
    { id: 2, type: 'TECHNICAL', company: 'Tata Motors', action: 'Breakout', details: 'Broke out of 6-month consolidation', time: '10:15 AM', date: 'Mar 29, 2026' },
    { id: 3, type: 'RISK', company: 'NBFCs', action: 'Regulatory', details: 'RBI increases risk weightage', time: '09:00 AM', date: 'Mar 29, 2026' },
    { id: 4, type: 'EARNINGS', company: 'Infosys', action: 'Review', details: 'Positive Q4 guidance beat', time: '05:30 PM', date: 'Mar 28, 2026' },
  ]);
  
  const router = useRouter();

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser({
      name: 'Bhuvnesh Sharma',
      email: 'bhuvnesh@example.com',
      profile: 'Aggressive',
      isPrime: true
    });
    router.push('/');
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, signalHistory }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
