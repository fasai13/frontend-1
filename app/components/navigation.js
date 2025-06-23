// app/components/Navigation.tsx
'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">หน้าแรก</Link></li>
        <li><Link href="/about">เกี่ยวกับ</Link></li>
        <li><Link href="/service">service</Link></li>
        <li><Link href="/contact">ติดต่อ</Link></li>
      </ul>
    </nav>
  );
}