import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Sign PDF',
  description: 'Add signature fields to PDFs automatically on the AnyConvert API. Send a file, get the signed PDF delivered to your webhook.',
};

export default function SignPdfPage() {
  return (
    <ToolPage
      badge="API for document conversion"
      headline="Add signature fields to PDFs, automatically."
      description="Send a PDF and signer details to one endpoint. We apply the signature field and deliver the signed document to your webhook."
      exampleFile="agreement.pdf"
      exampleFileId="document-001"
      trustBullet="Signature fields placed exactly where you specify."
    />
  );
}
