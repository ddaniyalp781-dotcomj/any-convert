import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'Compress PDF',
  description: 'Compress PDFs automatically on the AnyConvert API. Send a file, get the smaller PDF delivered to your webhook.',
};

export default function CompressPdfPage() {
  return (
    <ToolPage
      badge="API for document conversion"
      headline="Compress PDFs, automatically."
      description="Send a PDF to one endpoint. We reduce its file size without sacrificing print quality and deliver it to your webhook."
      exampleFile="presentation.pdf"
      exampleFileId="document-001"
      price="From $0.14 / doc"
      trustBullet="Smaller files with no visible quality loss."
    />
  );
}
