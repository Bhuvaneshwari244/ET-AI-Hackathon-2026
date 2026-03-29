'use client';
import { Shield, TrendingUp, AlertCircle, Info } from 'lucide-react';

const mockSignals = [
  {
    id: 1,
    type: 'filing',
    title: 'HDFC Bank Q4 FY26 Results',
    desc: 'Net profit up 18% YoY. NIMs expanded by 10bps vs estimate.',
    impact: 'Success',
    time: '2 mins ago',
  },
  {
    id: 2,
    type: 'insider',
    title: 'Insider Buy: Reliance Ind.',
    desc: 'MD & CEO bought 50,000 shares from open market.',
    impact: 'Success',
    time: '15 mins ago',
  },
  {
    id: 3,
    type: 'technical',
    title: 'Breakout Alert: Tata Motors',
    desc: 'Broke out of 6-month consolidation zone with 3x volume.',
    impact: 'Success',
    time: '1 hour ago',
  },
  {
    id: 4,
    type: 'risk',
    title: 'Regulatory Change: NBFCs',
    desc: 'RBI increases risk weightage for unsecured loans. Monitor Bajaj Finance.',
    impact: 'Warning',
    time: '3 hours ago',
  },
];

export default function OpportunityRadar() {
  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 4' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Opportunity Radar</h2>
        <TrendingUp size={20} color="var(--primary)" />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {mockSignals.map((s) => (
          <div key={s.id} className="glass-hover" style={{ padding: '1rem', borderRadius: '0.75rem', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ paddingTop: '0.25rem' }}>
                {s.impact === 'Success' ? <TrendingUp size={16} color="var(--success)" /> : <AlertCircle size={16} color="var(--warning)" />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                  <span className={`signal-badge signal-${s.impact.toLowerCase() === 'success' ? 'success' : 'warning'}`}>
                    {s.type}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{s.time}</span>
                </div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.25rem', color: '#fff' }}>{s.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: '1.4' }}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button style={{ 
        width: '100%', 
        padding: '0.75rem', 
        marginTop: '1.5rem', 
        background: 'rgba(255,255,255,0.05)', 
        border: '1px solid var(--card-border)',
        borderRadius: '0.5rem',
        color: 'var(--foreground)',
        cursor: 'pointer',
        fontSize: '0.85rem'
      }}>
        View All Signals
      </button>
    </div>
  );
}
