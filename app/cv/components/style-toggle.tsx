'use client';

import { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'flowbite-react';
import { useCvStyle, STYLES, type CvStyle } from '../hooks/use-cv-style';

const LABELS: Record<CvStyle, string> = {
  modern: 'Modern',
  professional: 'Professional',
  simple: 'Simple',
};

export default function StyleToggle() {
  const [style, setStyle] = useCvStyle();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const body = document.body;
    STYLES.forEach((s) => body.classList.remove(`cv-style-${s}`));
    body.classList.add(`cv-style-${style}`);
    return () => {
      STYLES.forEach((s) => body.classList.remove(`cv-style-${s}`));
    };
  }, [style, hydrated]);

  return (
    <ButtonGroup>
      {STYLES.map((s) => (
        <Button
          key={s}
          color={s === style ? 'dark' : 'alternative'}
          size="sm"
          onClick={() => setStyle(s)}
          className={
            s === style
              ? 'dark:bg-white! dark:text-gray-900! dark:border-white! dark:hover:bg-gray-200!'
              : undefined
          }
        >
          {LABELS[s]}
        </Button>
      ))}
    </ButtonGroup>
  );
}
