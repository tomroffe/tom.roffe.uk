'use client';

import { useEffect, useState } from 'react';

export const STYLES = ['modern', 'professional', 'simple'] as const;
export type CvStyle = (typeof STYLES)[number];

const STORAGE_KEY = 'cv-style';
const EVENT = 'cv-style-changed';

export function useCvStyle(): [CvStyle, (s: CvStyle) => void] {
  const [style, setStyleState] = useState<CvStyle>('modern');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as CvStyle | null;
    if (saved && (STYLES as readonly string[]).includes(saved)) {
      setStyleState(saved);
    }
    const handler = (e: Event) => setStyleState((e as CustomEvent<CvStyle>).detail);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  const setStyle = (s: CvStyle) => {
    localStorage.setItem(STORAGE_KEY, s);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: s }));
  };

  return [style, setStyle];
}
