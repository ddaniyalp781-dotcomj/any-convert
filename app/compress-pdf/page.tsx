import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Compress PDF',
  description: 'Compress PDFs automatically on the AnyConvert API. Send a file, get the smaller PDF delivered to your webhook.',
};

export default function CompressPdfPage() {
  return (
    <ToolPage
      headline="Compress PDFs, automatically."
      description="Send a PDF to one endpoint. We reduce its file size without sacrificing print quality and deliver it to your webhook."
      price="From $0.14 / doc"
      iconBg="#C24A3A"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3M3 16h3a2 2 0 0 1 2 2v3m8-5h3a2 2 0 0 1 2 2v3" />
        </svg>
      }
    />
  );
}
