import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sumantra Kundu — Lead Web Designer & Lead UX/UI Designer',
  description: '18+ years of experience across web design, UX/UI, frontend development and AI-assisted digital workflows. Based in Kolkata, India; available for international freelance and remote contracts.',
  openGraph: {
    title: 'Sumantra Kundu — Lead Web Designer & Lead UX/UI Designer',
    description: 'Lead Web Designer and Lead UX/UI Designer with 18+ years of experience in digital design and frontend development.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
