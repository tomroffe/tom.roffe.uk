
'use client';

import { useState, useEffect } from 'react';
import { ToggleSwitch } from 'flowbite-react';

const ContentToggle: React.FC = () => {
  const [isShort, setIsShort] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isShort) {
      body.classList.add('show-short');
      body.classList.remove('show-long');
    } else {
      body.classList.add('show-long');
      body.classList.remove('show-short');
    }

    return () => {
      body.classList.remove('show-short', 'show-long');
    };
  }, [isShort]);

  return (
    <div className="inline-flex items-center cursor-pointer mr-5">
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Long</span>
      <ToggleSwitch
        checked={isShort}
        onChange={setIsShort}
        sizing="md"
        className="peer"
      />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Short</span>
    </div>

  );
};

export default ContentToggle;
