'use client';
import { CircleUser, Compass, Star, ChevronRight, ShieldCheck, CreditCard, LifeBuoy, GraduationCap, Newspaper } from 'lucide-react';

export default function ConciergePage() {
  return (
    <div className="animate-fade">
      <header style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2rem', fontWeight: '700' }}>ET Concierge</h1>
        <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Your personal guide to the ET ecosystem and financial services.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        
        {/* User Profiling Card */}
        <div className="card glass" style={{ gridColumn: 'span 8', padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', padding: '4px' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircleUser size={64} color="var(--muted)" />
              </div>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>Bhuvnesh Sharma</h2>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(139, 92, 246, 0.2)', color: 'var(--primary)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>ET Prime Member</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', color: 'var(--muted)', border: '1px solid var(--card-border)' }}>Investor Profile: Aggressive</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: '1.6' }}>
                Based on your behavior, you're primarily focused on **Small/Mid-cap equity** and **F&O**. I've customized your dashboard to highlight these signals.
              </p>
            </div>
          </div>
        </div>

        {/* Discovery Card */}
        <div className="card glass" style={{ gridColumn: 'span 4', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Compass size={20} color="var(--primary)" />
            <h3 style={{ fontSize: '1rem' }}>Recommended for You</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'ET Wealth Summit', desc: 'Apr 12, 2026', icon: Star },
              { label: 'Masterclass: Derivatives', desc: 'On-demand', icon: GraduationCap },
              { label: 'Prime: Tech Sector Deep-Dive', desc: 'New Article', icon: Newspaper },
            ].map((item, idx) => (
              <div key={idx} className="glass-hover" style={{ padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <item.icon size={16} color="var(--muted)" />
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#fff' }}>{item.label}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{item.desc}</div>
                  </div>
                </div>
                <ChevronRight size={14} color="var(--muted)" />
              </div>
            ))}
          </div>
        </div>

        {/* Financial Services Marketplace */}
        <div className="card glass" style={{ gridColumn: 'span 12', padding: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>ET Services Marketplace</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <CreditCard size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Credit Cards & Loans</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Personalized offers based on your credit profile.</p>
              <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>Explore Offers →</button>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <ShieldCheck size={24} color="var(--success)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Wealth Insurance</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>Gap analysis of your current life and health covers.</p>
              <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>Request Audit →</button>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <LifeBuoy size={24} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>ET Prime Support</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1rem' }}>24/7 dedicated concierge for VIP members.</p>
              <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>Chat with Agent →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
