import type { Metadata } from 'next';
import Header from '@/app/ui/header';
import PrintButton from '@/app/components/print-button';
import DownloadButton from '@/app/components/download-button';
import ContentToggle from '@/app/components/short-long-toggle';
import StyleToggle from './components/style-toggle';

export const metadata: Metadata = {
  title: 'Tom Roffe — CV',
  description: 'CV of Thomas A. Roffe — Operations Manager, Lead DevOps Engineer.',
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-gray-800">
      <Header />

      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-3 py-2 gap-3 print:hidden">
        <div />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ContentToggle />
          <StyleToggle />
        </div>
        <div className="flex items-center justify-self-end gap-1 border-l border-gray-300 dark:border-gray-600 pl-3">
          <DownloadButton />
          <PrintButton />
        </div>
      </div>

      {children}
    </main>
  );
}
