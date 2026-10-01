import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'PDF to Word',
  description: 'Convert PDF to Word automatically on the AnyConvert API. Send a file, get a .docx delivered to your webhook.',
};

export default function PdfToWordPage() {
  return (
    <ToolPage
      headline="Convert PDF to Word, automatically."
      description="Send a PDF to one endpoint. We convert it to an editable .docx and deliver it straight to your webhook."
      price="From $0.27 / doc"
      iconBg="#2F6FE4"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
          <path d="M8 13h8M8 17h5" />
        </svg>
      }
    />
  );
}
