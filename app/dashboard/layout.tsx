import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Manage your AnyConvert API key, credits, and webhook.',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
