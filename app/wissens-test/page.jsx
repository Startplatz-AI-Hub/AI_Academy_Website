'use client';

import dynamic from 'next/dynamic';
import SubpageLayout from '../../components/SubpageLayout';

/* Dynamic import with SSR disabled — avoids hydration mismatch
   because the quiz is fully interactive and doesn't need SSR. */
const WissensTest = dynamic(() => import('../../components/WissensTest'), {
  ssr: false,
});

export default function WissensTestPage() {
  return (
    <SubpageLayout>
      <WissensTest />
    </SubpageLayout>
  );
}
