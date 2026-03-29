'use client';
import { useAuth } from '../../context/AuthContext';
import { History, Search, Filter, ArrowUpRight, ArrowDownRight, Clock, Building2, TrendingUp } from 'lucide-react';

export default function HistoryPage() {
  const { signalHistory } = useAuth();
  
  const getTypeColor = (type) => {
    switch (type) {
      case 'INSIDER': return 'var(--primary)';
      case 'TECHNICAL': return 'var(--success)';
      case 'RISK': return 'var(--danger)';
      case 'EARNINGS': return 'var(--secondary)';
      default: return 'var(--muted)';
    }
  };

  return (
    <div className="animate-fade">
      <header style={{ 
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
        marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--card-border)' 
      }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: '2rem', fontWeight: '700' }}>Signal History</h1>
          <p style={{ color: 'var(--muted)', marginTop: '0.25rem' }}>Verify and track past AI signals and their outcomes.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} color="var(--muted)" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Filter by company..." 
              style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid var(--card-border)',
                borderRadius: '0.5rem', padding: '0.6rem 1rem 0.6rem 2.25rem', color: '#fff',
                width: '240px', fontSize: '0.85rem'
              }}
            />
          </div>
          <button className="glass-hover" style={{ padding: '0.5rem 1rem', background: 'none', border: '1px solid var(--card-border)', borderRadius: '0.5rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <Filter size={16} /> Filters
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {signalHistory.map((signal) => (
          <div key={signal.id} className="card glass glass-hover" style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: '80px 1.5fr 3fr 1fr', alignItems: 'center', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '0.65rem', fontWeight: '700', padding: '0.25rem 0.5rem', 
                borderRadius: '0.25rem', background: `rgba(${getTypeColor(signal.type) === 'var(--primary)' ? '139, 92, 246' : (getTypeColor(signal.type) === 'var(--success)' ? '34, 197, 94' : '239, 68, 68')}, 0.1)`, 
                color: getTypeColor(signal.type), border: `1px solid ${getTypeColor(signal.type)}`,
                marginBottom: '0.5rem', display: 'inline-block'
              }}>
                {signal.type}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                <Clock size={12} /> {signal.time}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--card-border)' }}>
                 <Building2 size={20} color="var(--muted)" />
              </div>
              <div>
                <div style={{ fontWeight: '600', color: '#fff' }}>{signal.company}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--primary)' }}>{signal.action}</div>
              </div>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.5' }}>
              {signal.details}
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.25rem' }}>
                {signal.action === 'Buy' || signal.action === 'Breakout' ? (
                  <ArrowUpRight size={16} color="var(--success)" />
                ) : (
                  <ArrowDownRight size={16} color="var(--danger)" />
                )}
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Outcome</span>
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '700', color: signal.action === 'Buy' ? 'var(--success)' : '#fff' }}>
                {signal.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        <button style={{ background: 'none', border: '1px solid var(--card-border)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', color: 'var(--muted)', fontSize: '0.85rem', cursor: 'pointer' }}>
          Load More History
        </button>
      </div>
    </div>
  );
}
