'use client';
import { useState } from 'react';
import { Send, Bot, User, Share2, Clipboard } from 'lucide-react';

const initialMessages = [
  { id: 1, role: 'assistant', content: "Hello! I'm your ET Market Intelligence Agent. How can I help you today? I have access to real-time NSE/BSE data and corporate filings." },
  { id: 2, role: 'assistant', content: "I see you're watching **HDFC Bank**. The latest Q4 results show strong net profit growth, but NIMs are a key watch area. Would you like a deep dive into their segmental performance?" },
];

export default function MarketAssistant() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), role: 'user', content: input }]);
    setInput('');
    
    // Simulate thinking
    setTimeout(() => {
      setMessages(m => [...m, { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: "That's a great question. Based on the latest **NSE data**, the delivery volume has seen a 15% uptick. This suggests accumulation by institutional investors. Source: *ET Markets Real-time Feed*." 
      }]);
    }, 1000);
  };

  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', height: '100%', minHeight: '600px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Bot size={20} color="var(--primary)" />
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Market Assistant</h2>
        </div>
        <Share2 size={18} color="var(--muted)" style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingRight: '0.5rem' }}>
        {messages.map((m) => (
          <div key={m.id} style={{ 
            display: 'flex', 
            gap: '0.75rem', 
            flexDirection: m.role === 'user' ? 'row-reverse' : 'row',
            alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
            maxWidth: '85%'
          }}>
            <div style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              background: m.role === 'user' ? 'var(--secondary)' : 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '0.25rem'
            }}>
              {m.role === 'user' ? <User size={12} color="#fff" /> : <Bot size={12} color="#fff" />}
            </div>
            <div style={{ 
              padding: '0.85rem 1rem', 
              borderRadius: '0.75rem', 
              background: m.role === 'user' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(255,255,255,0.03)',
              border: '1px solid var(--card-border)',
              fontSize: '0.9rem',
              lineHeight: '1.5',
              color: m.role === 'user' ? '#fff' : 'var(--foreground)'
            }}>
              <p>{m.content}</p>
              {m.role === 'assistant' && (
                <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                  <button style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.75rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Clipboard size={12} /> Copy Analysis
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', background: 'rgba(0,0,0,0.2)', padding: '0.5rem', borderRadius: '0.75rem', border: '1px solid var(--card-border)' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Ask about a stock, pattern, or news..." 
          style={{ 
            flex: 1, 
            background: 'none', 
            border: 'none', 
            color: '#fff', 
            padding: '0.5rem', 
            outline: 'none', 
            fontSize: '0.9rem' 
          }}
        />
        <button 
          onClick={send}
          style={{ 
            background: 'var(--primary)', 
            border: 'none', 
            borderRadius: '0.5rem', 
            width: '32px', 
            height: '32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <Send size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
}
