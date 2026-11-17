import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'TradeMind AI - Торгуй розумніше' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="uk"><body style={{margin:0,background:'#05080f',color:'#e6edf3',fontFamily:'system-ui'}}>{children}</body></html>);
}
