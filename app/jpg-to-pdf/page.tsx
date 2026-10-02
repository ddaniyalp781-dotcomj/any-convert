import type { Metadata } from 'next';
import ToolPage from '@/components/ToolPage';

export const metadata: Metadata = {
  title: 'JPG to PDF',
  description: 'Turn images into PDF automatically on the AnyConvert API. Send your images, get a PDF delivered to your webhook.',
};

export default function JpgToPdfPage() {
  return (
    <ToolPage
      headline="Turn images into PDF, automatically."
      description="Send JPG, PNG, BMP, GIF, or TIFF images to one endpoint. We combine them into a single PDF and deliver it to your webhook."
      price="From $0.14 / doc"
      trustBullet="Supports JPG, PNG, BMP, GIF, and TIFF input."
      iconBg="#D98B1F"
      icon={
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.5" />
          <path d="m21 16-5-5L5 20" />
        </svg>
      }
    />
  );
}
