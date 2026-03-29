'use client';
import { Sparkles, Calculator, PiggyBank, GraduationCap, ShieldCheck } from 'lucide-react';

export default function MentorPage() {
  return (
    <div className="animate-fade">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2rem', fontWeight: '700' }}>AI Money Mentor</h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Personalized financial planning and long-term wealth building.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '9999px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <ShieldCheck size={16} color="var(--secondary)" />
          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>SEBI Compliant Reasoning</span>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        
        {/* Tax Wizard Card */}
        <div className="card glass" style={{ gridColumn: 'span 7', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Calculator size={32} color="var(--primary)" />
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem' }}>Tax Wizard 2026</h2>
          </div>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem' }}>AI-optimized regime comparison based on your income and deductions.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Old Regime</h4>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>₹1,42,000</div>
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>Payable Tax (Estimated)</p>
            </div>
            <div style={{ padding: '1.5rem', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '1rem', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>New Regime</h4>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--success)', marginBottom: '0.5rem' }}>₹98,500</div>
              <p style={{ fontSize: '0.7rem', color: 'var(--success)' }}>Potential Saving: ₹43,500</p>
            </div>
          </div>

          <button style={{ 
            width: '100%', 
            padding: '1rem', 
            marginTop: '2rem', 
            background: 'var(--primary)', 
            border: 'none', 
            borderRadius: '0.75rem', 
            color: '#fff', 
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Optimize Deductions (80C, 24b)
          </button>
        </div>

        {/* FIRE Planner Card */}
        <div className="card glass" style={{ gridColumn: 'span 5', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <PiggyBank size={32} color="var(--secondary)" />
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.5rem' }}>FIRE Roadmap</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Retirement Target</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>₹8.50 Crores</div>
            </div>
            <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', border: '1px solid var(--card-border)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.5rem' }}>Time Remaining</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700' }}>14 Years</div>
            </div>
            <button style={{ 
              padding: '1rem', 
              background: 'none', 
              border: '1px solid var(--card-border)', 
              borderRadius: '0.75rem', 
              color: 'var(--muted)',
              cursor: 'pointer'
            }}>
              Adjust Simulation Parameters
            </button>
          </div>
        </div>

        {/* Portfolio X-Ray */}
        <div className="card glass" style={{ gridColumn: 'span 12', padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <GraduationCap size={24} color="var(--primary)" />
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Mutual Fund Portfolio X-Ray</h2>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
            We've found a **12% overlap** between your active MF holdings. Click to optimize.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {['Large Cap', 'Mid Cap', 'Index Fund', 'Debt'].map((cat, idx) => (
              <div key={idx} style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '0.75rem', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem' }}>{cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
