import type { Metadata } from 'next';
import ComingSoonTool from '@/components/ComingSoonTool';

export const metadata: Metadata = {
  title: 'JPG to PDF',
  description: 'Turn images into PDF automatically. Coming soon on the AnyConvert API.',
};

export default function JpgToPdfPage() {
  return (
    <ComingSoonTool
      headline="Turn images into PDF, automatically."
      description="Send JPG, PNG, BMP, GIF, or TIFF images to one endpoint. We combine them into a single PDF and deliver it to your webhook."
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
