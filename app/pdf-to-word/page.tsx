import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'PDF to Word',
  description: 'Convert PDF to Word automatically on the AnyConvert API. Send a file, get a .docx delivered to your webhook.',
};

export default function PdfToWordPage() {
  return (
    <ToolPage
      badge="API for document conversion"
      headline="Convert PDF to Word, automatically."
      description="Send a PDF to one endpoint. We convert it to an editable .docx and deliver it straight to your webhook."
      exampleFile="contract.pdf"
      exampleFileId="document-001"
      trustBullet="Preserves original formatting, fonts, and layout."
    />
  );
}
