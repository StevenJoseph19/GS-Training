
import Providers from '@/providers/Providers';

export const metadata = { title: 'AutoMart', description: 'Context navigation stub with Next.js' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
