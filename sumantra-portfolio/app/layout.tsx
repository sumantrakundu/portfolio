import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sumantra Kundu — Design Engineer & AI Product Developer',
  description: '17 years of experience across UI/UX design, frontend engineering and AI-powered product development. Available for international freelance and remote contracts.',
  openGraph: {
    title: 'Sumantra Kundu — Design Engineer & AI Product Developer',
    description: 'Designing thoughtful digital experiences. Engineering products that move businesses forward.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
