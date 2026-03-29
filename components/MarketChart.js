'use client';
import { useEffect, useRef } from 'react';
import { createChart, CandlestickSeries } from 'lightweight-charts';

const mockData = [
  { time: '2026-03-24', open: 154.21, high: 155.44, low: 153.55, close: 155.03 },
  { time: '2026-03-25', open: 155.03, high: 156.49, low: 154.22, close: 156.28 },
  { time: '2026-03-26', open: 156.28, high: 158.19, low: 155.98, close: 157.94 },
  { time: '2026-03-27', open: 157.94, high: 160.22, low: 157.88, close: 159.88 },
  { time: '2026-03-28', open: 159.88, high: 162.33, low: 159.22, close: 161.44 },
  { time: '2026-03-29', open: 161.44, high: 165.22, low: 161.44, close: 164.88 },
];

export default function MarketChart() {
  const chartContainerRef = useRef();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: 'transparent' },
        textColor: '#64748b',
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.05)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.05)' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 480,
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    candlestickSeries.setData(mockData);

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="card glass animate-fade" style={{ gridColumn: 'span 8', padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.25rem' }}>Market Performance | Nifty 50</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '0.25rem' }}>High-fidelity technical visualization</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: 'var(--success)', fontWeight: '600', fontSize: '1.1rem' }}>+1.45%</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Today</div>
          </div>
        </div>
      </div>
      <div ref={chartContainerRef} style={{ width: '100%', height: '480px' }} />
    </div>
  );
}
