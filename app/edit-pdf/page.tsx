import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Edit PDF',
  description: 'Edit PDFs automatically on the AnyConvert API. Send a file with your changes, get the result delivered to your webhook.',
};

export default function EditPdfPage() {
  return (
    <ToolPage
      headline="Edit PDFs, automatically."
      description="Send a PDF with edit instructions to one endpoint. We apply text, shape, and annotation changes and deliver the result to your webhook."
      price="From $0.27 / doc"
      iconBg="#2E9B8F"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
        </svg>
      }
    />
  );
}
