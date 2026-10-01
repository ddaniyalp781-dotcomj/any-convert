import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Merge PDF',
  description: 'Merge PDFs automatically on the AnyConvert API. Send your files, get the combined PDF delivered to your webhook.',
};

export default function MergePdfPage() {
  return (
    <ToolPage
      headline="Merge PDFs, automatically."
      description="Send multiple PDF files to one endpoint. We combine them into a single document and deliver it to your webhook."
      price="From $0.18 / doc"
      iconBg="#6D4FC4"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="12" height="12" rx="2" />
          <path d="M9 15v3a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3" />
        </svg>
      }
    />
  );
}
