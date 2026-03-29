'use client';
import { Newspaper, ChevronRight, Play, BookOpen } from 'lucide-react';

export default function IntelligenceBriefing() {
  const briefing = {
    title: 'Market Deep-Dive: The Festive Rally Begins?',
    date: 'Mar 29, 2026',
    sentiment: 'Bullish',
    summary: 'Indian markets are showing strong relative strength globally. Despite hawkish Fed commentary, domestic liquidity remains robust. We are seeing a structural shift towards Auto and Realty as festive demand kicks in.',
    keyPoints: [
      'Nifty 50 targets 24,000 as it breaks out of a 3-month base.',
      'ICICI Bank and HDFC Bank lead the charge with positive yield spreads.',
      'Auto sector volume growth hitting a 3-year high in early festive indicators.',
      'Risk Zone: Watch for rising crude prices affecting the INR/USD 84.50 level.'
    ]
  };

  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Newspaper size={20} color="var(--primary)" />
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Intelligence Briefing</h2>
        </div>
        <span className="signal-badge signal-success" style={{ fontSize: '0.65rem' }}>{briefing.sentiment}</span>
      </div>

      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '0.75rem' }}>{briefing.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
          {briefing.summary}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {briefing.keyPoints.map((point, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.8rem', color: 'var(--muted)' }}>
              <ChevronRight size={14} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
        <button style={{ 
          flex: 1, 
          padding: '0.75rem', 
          background: 'var(--primary)', 
          border: 'none', 
          borderRadius: '0.5rem', 
          color: '#fff', 
          fontSize: '0.8rem', 
          fontWeight: '600',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          <Play size={14} fill="#fff" /> Start 3-min Briefing
        </button>
        <button style={{ 
          padding: '0.75rem', 
          background: 'rgba(255,255,255,0.05)', 
          border: '1px solid var(--card-border)', 
          borderRadius: '0.5rem', 
          color: 'var(--foreground)', 
          cursor: 'pointer'
        }}>
          <BookOpen size={14} />
        </button>
      </div>
    </div>
  );
}
