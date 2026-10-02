import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'JPG to PDF',
  description: 'Turn images into PDF automatically on the AnyConvert API. Send your images, get a PDF delivered to your webhook.',
};

export default function JpgToPdfPage() {
  return (
    <ToolPage
      badge="API for image conversion"
      headline="Turn images into PDF, automatically."
      description="Send JPG, PNG, BMP, GIF, or TIFF images to one endpoint. We combine them into a single PDF and deliver it to your webhook."
      exampleFile="photo.jpg"
      exampleFileId="image-001"
      price="From $0.14 / doc"
      trustBullet="Supports JPG, PNG, BMP, GIF, and TIFF input."
    />
  );
}
