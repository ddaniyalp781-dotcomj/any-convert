import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Edit PDF',
  description: 'Edit PDFs automatically on the AnyConvert API. Send a file with your changes, get the result delivered to your webhook.',
};

export default function EditPdfPage() {
  return (
    <ToolPage
      badge="API for document conversion"
      headline="Edit PDFs, automatically."
      description="Send a PDF with edit instructions to one endpoint. We apply text, shape, and annotation changes and deliver the result to your webhook."
      exampleFile="invoice.pdf"
      exampleFileId="document-001"
      price="From $0.27 / doc"
      trustBullet="Text, shape, and annotation changes applied precisely."
    />
  );
}
