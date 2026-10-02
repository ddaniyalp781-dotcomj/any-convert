import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Merge PDF',
  description: 'Merge PDFs automatically on the AnyConvert API. Send your files, get the combined PDF delivered to your webhook.',
};

export default function MergePdfPage() {
  return (
    <ToolPage
      badge="API for document conversion"
      headline="Merge PDFs, automatically."
      description="Send multiple PDF files to one endpoint. We combine them into a single document and deliver it to your webhook."
      exampleFile="report.pdf"
      exampleFileId="document-001"
      trustBullet="Combine any number of PDFs in the order you send them."
    />
  );
}
