import CvBody from './components/CvBody';
import { PrintHeader } from './components/Sidebar';

export default function CvPage() {
  return (
    <div className="mx-4 flex grow flex-col gap-4 md:flex-row">
      <div className="relative mx-auto container max-w-7xl print:max-w-5xl">
        <PrintHeader />
        <CvBody />
        <p className="text-gray-600 text-xs text-center">
          * Positions held during university studies
        </p>
      </div>
    </div>
  );
}
