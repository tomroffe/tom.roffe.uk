import Image from "next/image";
import Header from '@/app/ui/header';

import WaterlooBridge from 'public/WaterlooBridge.svg'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex grow flex-col gap-4 md:flex-row not-dark:bg-gray-200 dark:bg-gray-800">
        <Image
          src={WaterlooBridge}
          className="h-[calc(100vh-80px)] block mx-auto max-w-full not-dark:invert"
          alt="London skyline of Waterloo bridge with the city and St Paul's in the background. Taken from the walk bridge at Charing Cross."
          priority={true}
          style={{
            objectFit: 'cover',
          }}
        />

      </div>
    </main>

  );
}
