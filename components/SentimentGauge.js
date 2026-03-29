'use client';
import { Activity, Gauge } from 'lucide-react';

export default function SentimentGauge() {
  const sentimentValue = 68; // 0 (Extreme Fear) to 100 (Extreme Greed)
  
  const getGradient = (val) => {
    if (val < 40) return 'linear-gradient(90deg, #ef4444 0%, #f59e0b 100%)';
    if (val < 60) return 'linear-gradient(90deg, #f59e0b 0%, #22c55e 100%)';
    return 'linear-gradient(90deg, #22c55e 0%, #8b5cf6 100%)';
  };

  const getLabel = (val) => {
    if (val < 25) return 'Extreme Fear';
    if (val < 45) return 'Fear';
    if (val < 65) return 'Neutral';
    if (val < 85) return 'Greed';
    return 'Extreme Greed';
  };

  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 4' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Activity size={20} color="var(--primary)" />
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Market Sentiment</h2>
        </div>
        <div style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--success)' }}>{sentimentValue}</div>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Simple Arc Visualization */}
        <div style={{ 
          width: '200px', 
          height: '24px', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '9999px',
          padding: '4px',
          border: '1px solid var(--card-border)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: `${sentimentValue}%`, 
            height: '100%', 
            background: getGradient(sentimentValue), 
            borderRadius: '9999px',
            transition: 'width 1s ease-in-out'
          }} />
        </div>
        
        <div style={{ 
          marginTop: '1.25rem', 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          fontFamily: 'var(--font-outfit)',
          color: sentimentValue > 65 ? 'var(--success)' : (sentimentValue < 35 ? 'var(--danger)' : 'var(--warning)')
        }}>
          {getLabel(sentimentValue)}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>Yesterday</div>
          <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>62 (Neutral)</div>
        </div>
        <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '0.5rem', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>Last Week</div>
          <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>45 (Fear)</div>
        </div>
      </div>
    </div>
  );
}
