import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Sign PDF',
  description: 'Add signature fields to PDFs automatically on the AnyConvert API. Send a file, get the signed PDF delivered to your webhook.',
};

export default function SignPdfPage() {
  return (
    <ToolPage
      headline="Add signature fields to PDFs, automatically."
      description="Send a PDF and signer details to one endpoint. We apply the signature field and deliver the signed document to your webhook."
      price="From $0.32 / doc"
      trustBullet="Signature fields placed exactly where you specify."
      iconBg="#C64FA0"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      }
    />
  );
}
