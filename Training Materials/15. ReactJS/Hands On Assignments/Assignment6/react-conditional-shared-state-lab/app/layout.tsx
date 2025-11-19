
import React from 'react';

export const metadata = { title: 'Conditional Rendering & Shared State — Lab' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
