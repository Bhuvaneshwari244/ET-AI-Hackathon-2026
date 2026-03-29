'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import { 
  TrendingUp, 
  LayoutDashboard, 
  BarChart4, 
  Sparkles, 
  CircleUser, 
  History,
  ShieldCheck,
  LogOut
} from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const { isLoggedIn, user, logout } = useAuth();

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { label: 'Market Analyst', icon: BarChart4, href: '/markets' },
    { label: 'Money Mentor', icon: Sparkles, href: '/mentor' },
    { label: 'Concierge', icon: CircleUser, href: '/concierge' },
  ];

  if (!isLoggedIn) return null; // Sidebar hidden on login page

  return (
    <aside className="sidebar glass">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem', padding: '0 1rem' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          background: 'var(--primary)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TrendingUp size={20} color="#fff" />
        </div>
        <span style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', fontWeight: '700' }}>
          ET <span style={{ color: 'var(--primary)' }}>Intel</span>
        </span>
      </div>

      <nav style={{ flex: 1 }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0 1rem 1rem' }}>
          Main Menu
        </p>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--card-border)', paddingTop: '1.5rem', padding: '0 1rem' }}>
        <Link href="/history" style={{ textDecoration: 'none' }}>
          <div className={`nav-link ${pathname === '/history' ? 'active' : ''}`} style={{ marginBottom: '1.5rem' }}>
            <History size={16} />
            <span style={{ fontSize: '0.8rem' }}>Signal History</span>
          </div>
        </Link>
        
        <div style={{ padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '0.75rem', border: '1px solid rgba(139, 92, 246, 0.2)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <ShieldCheck size={14} color="var(--primary)" />
            <span style={{ fontSize: '0.75rem', color: '#fff', fontWeight: '600' }}>Pro Status</span>
          </div>
          <p style={{ fontSize: '0.65rem', color: 'var(--muted)', lineHeight: '1.4' }}>
            Multi-agent intelligence is active.
          </p>
        </div>

        <button 
          onClick={logout}
          style={{ 
            width: '100%', padding: '0.75rem', borderRadius: '0.5rem', 
            background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', 
            color: 'var(--danger)', fontSize: '0.8rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            transition: 'all 0.2s ease'
          }}
          className="glass-hover"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </aside>
  );
}
