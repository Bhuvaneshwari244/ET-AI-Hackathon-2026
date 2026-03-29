'use client';
import { LayoutGrid, Info } from 'lucide-react';

const sectors = [
  { name: 'Nifty Bank', change: '+1.45%', val: 1.45 },
  { name: 'Nifty IT', change: '-0.82%', val: -0.82 },
  { name: 'Nifty Auto', change: '+2.10%', val: 2.10 },
  { name: 'Nifty FMCG', change: '+0.15%', val: 0.15 },
  { name: 'Nifty Pharma', change: '-0.45%', val: -0.45 },
  { name: 'Nifty Realty', change: '+3.20%', val: 3.20 },
  { name: 'Nifty Media', change: '-1.10%', val: -1.10 },
  { name: 'Nifty Metal', change: '+1.75%', val: 1.75 },
];

export default function SectorHeatmap() {
  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 4' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LayoutGrid size={20} color="var(--primary)" />
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Sector Heatmap</h2>
        </div>
        <Info size={16} color="var(--muted)" style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '1rem' 
      }}>
        {sectors.map((s, idx) => (
          <div 
            key={idx} 
            className="glass-hover"
            style={{ 
              padding: '1rem', 
              borderRadius: '0.75rem', 
              background: s.val > 0 
                ? `rgba(34, 197, 94, ${Math.min(0.1 + Math.abs(s.val) * 0.05, 0.3)})` 
                : `rgba(239, 68, 68, ${Math.min(0.1 + Math.abs(s.val) * 0.05, 0.3)})`,
              border: `1px solid ${s.val > 0 ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '500', marginBottom: '0.25rem' }}>{s.name}</div>
            <div style={{ 
              fontSize: '1.1rem', 
              fontWeight: '700', 
              color: s.val > 0 ? 'var(--success)' : 'var(--danger)' 
            }}>
              {s.change}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: '1.4' }}>
          <span style={{ color: 'var(--primary)', fontWeight: '600' }}>AI Insight:</span> Real Estate and Auto sectors are leading today's rotation due to positive management commentary on festive sales. IT remains under pressure globally.
        </p>
      </div>
    </div>
  );
}
