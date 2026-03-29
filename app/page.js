'use client';
import { useState } from 'react';
import { Search, Bell, Settings, User, TrendingUp, BarChart3, PieChart, Activity, X, ChevronRight, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import OpportunityRadar from '../components/OpportunityRadar';
import MarketAssistant from '../components/MarketAssistant';
import IntelligenceBriefing from '../components/IntelligenceBriefing';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const Modal = ({ type, title, children, onClose }) => (
    <div style={{ 
      position: 'fixed', 
      top: 0, right: 0, bottom: 0, left: type === 'panel' ? 'auto' : 0,
      width: type === 'panel' ? '400px' : '100%',
      height: '100%',
      background: type === 'panel' ? 'var(--background)' : 'rgba(2, 6, 23, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: type === 'panel' ? 'stretch' : 'center',
      justifyContent: 'center',
      borderLeft: type === 'panel' ? '1px solid var(--card-border)' : 'none',
      animation: 'fadeIn 0.3s ease'
    }}>
      <div className={type === 'panel' ? '' : 'card glass'} style={{ 
        width: type === 'panel' ? '100%' : '500px',
        padding: '2rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}>
          <X size={24} />
        </button>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem', marginBottom: '2rem' }}>{title}</h2>
        {children}
      </div>
    </div>
  );

  return (
    <div className="animate-fade">
      {/* Header Modal Handlers */}
      {activeModal === 'alerts' && (
        <Modal type="panel" title="Recent Alerts" onClose={() => setActiveModal(null)}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.75rem', border: '1px solid var(--card-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span className="signal-badge signal-success">Price Alert</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>10m ago</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#fff' }}>HDFC Bank crossed the resistance level of 1,750 with high volume.</p>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {/* Main Header */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2.5rem',
        padding: '1rem 0',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', fontWeight: '700' }}>Dashboard Overview</h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Welcome back, <span style={{ color: 'var(--primary)' }}>Bhuvnesh Sharma</span>. Market is currently <span style={{ color: 'var(--success)' }}>OPEN</span>.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={20} color="var(--muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--card-border)',
                borderRadius: '9999px',
                padding: '0.6rem 1rem 0.6rem 2.5rem',
                color: '#fff',
                width: '240px',
                outline: 'none'
              }}
            />
          </div>
          <Bell size={20} color="var(--muted)" style={{ cursor: 'pointer' }} onClick={() => setActiveModal('alerts')} />
          <Settings size={20} color="var(--muted)" style={{ cursor: 'pointer' }} />
          <div style={{ 
            width: '36px', height: '36px', borderRadius: '50%', 
            border: '2px solid var(--primary)', padding: '2px', cursor: 'pointer'
          }}>
            <User size={18} color="var(--muted)" />
          </div>
        </div>
      </header>

      {/* Hero Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { label: 'Portfolio Value', val: '₹42,50,000', change: '+2.4%', icon: PieChart },
          { label: 'Day P&L', val: '₹1,02,450', change: '+1.8%', icon: BarChart3 },
          { label: 'Active Signals', val: '12', change: 'Market Open', icon: Activity },
          { label: 'AI Market Sentiment', val: '68%', change: 'Greedy', icon: TrendingUp },
        ].map((stat, idx) => (
          <div key={idx} className="card glass glass-hover">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{stat.label}</span>
              <stat.icon size={18} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-outfit)' }}>{stat.val}</div>
            <div style={{ color: stat.change.includes('+') ? 'var(--success)' : 'var(--primary)', fontSize: '0.75rem', marginTop: '0.5rem' }}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        <OpportunityRadar />
        <MarketAssistant />
        <IntelligenceBriefing />
        
        {/* Navigation Quick Links */}
        <div className="card glass" style={{ gridColumn: 'span 12', padding: '1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Agentic Shortcuts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Link href="/markets" style={{ textDecoration: 'none' }}>
              <div className="glass-hover" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Analyze Technical Patterns</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Run deep-dive chart patterns and volume breakouts.</p>
                </div>
                <ArrowRight size={24} color="var(--primary)" />
              </div>
            </Link>
            <Link href="/mentor" style={{ textDecoration: 'none' }}>
              <div className="glass-hover" style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.25rem' }}>Optimize My Wealth</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Check tax-savings and simulate your FIRE goal.</p>
                </div>
                <ArrowRight size={24} color="var(--secondary)" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
