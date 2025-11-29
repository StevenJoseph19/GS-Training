
'use client';
export default function Banner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {subtitle && <p style={{ margin: 0, color: '#666' }}>{subtitle}</p>}
    </header>
  );
}
