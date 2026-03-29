'use client';
import { BarChart4, Globe, Zap } from 'lucide-react';
import MarketChart from '../../components/MarketChart';
import SectorHeatmap from '../../components/SectorHeatmap';

export default function MarketsPage() {
  return (
    <div className="animate-fade">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2rem', fontWeight: '700' }}>Market Analyst Lab</h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Deep-dive technical indicators and sector rotation monitoring.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="glass-hover" style={{ padding: '0.6rem 1.25rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Globe size={18} /> Global Markets
          </button>
          <button className="glass-hover" style={{ padding: '0.6rem 1.25rem', borderRadius: '0.5rem', background: 'var(--primary)', border: 'none', color: '#fff', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={18} /> Real-time Feed
          </button>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
        <MarketChart />
        <SectorHeatmap />
        
        <div className="card glass" style={{ gridColumn: 'span 12', padding: '1.5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Multi-Agent Technical Report</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
            <div>
              <h4 style={{ color: 'var(--primary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Momentum Agent</h4>
              <p style={{ fontSize: '0.85rem', color: '#fff', lineHeight: '1.6' }}>The Nifty 50 has crossed the 20-DMA with increasing volume. RSI stands at 62, suggesting there is still room before overbought territory.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--success)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Volume Agent</h4>
              <p style={{ fontSize: '0.85rem', color: '#fff', lineHeight: '1.6' }}>Institutional delivery volume has increased by 15% in the last 48 hours, primarily centered around Banking and Realty sectors.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--warning)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>Volatility Agent</h4>
              <p style={{ fontSize: '0.85rem', color: '#fff', lineHeight: '1.6' }}>India VIX has cooled down to 12.5. This low-volatility environment is conducive for 'Buy-on-Dips' strategies in blue-chip stocks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
