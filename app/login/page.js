'use client';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { TrendingUp, Lock, Mail, ChevronRight, Gavel } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email });
  };

  return (
    <div style={{ 
      minHeight: '100vh', width: '100%', 
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      background: 'radial-gradient(circle at top left, rgba(139, 92, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at bottom right, rgba(34, 197, 94, 0.15) 0%, transparent 40%)',
      position: 'fixed', top: 0, left: 0, zIndex: 1000
    }}>
      <div className="card glass animate-fade" style={{ width: '400px', padding: '2.5rem', textAlign: 'center' }}>
        <div style={{ 
          width: '56px', height: '56px', background: 'var(--primary)', 
          borderRadius: '16px', margin: '0 auto 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
        }}>
          <TrendingUp size={32} color="#fff" />
        </div>
        
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>ET Intelligence</h1>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>The next-gen portal for the Indian retail investor.</p>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ position: 'relative' }}>
            <Mail size={18} color="var(--muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="email" 
              placeholder="ET ID or Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)',
                borderRadius: '0.75rem', color: '#fff', outline: 'none'
              }}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Lock size={18} color="var(--muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '0.85rem 1rem 0.85rem 2.75rem', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)',
                borderRadius: '0.75rem', color: '#fff', outline: 'none'
              }}
            />
          </div>
          
          <button type="submit" style={{ 
            marginTop: '1rem', padding: '1rem', background: 'var(--primary)', 
            border: 'none', borderRadius: '0.75rem', color: '#fff', 
            fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
          }}>
            Sign In with ET ID <ChevronRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Or continue with</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
             {['Google', 'ZeroDha', 'ICICI'].map(prov => (
               <button key={prov} className="glass-hover" style={{ padding: '0.5rem 1rem', background: 'none', border: '1px solid var(--card-border)', borderRadius: '0.5rem', color: 'var(--muted)', fontSize: '0.75rem', cursor: 'pointer' }}>
                 {prov}
               </button>
             ))}
          </div>
        </div>

        <p style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.7rem', color: 'var(--muted)' }}>
          <Gavel size={14} /> SEBI Compliant Onboarding Process
        </p>
      </div>
    </div>
  );
}
