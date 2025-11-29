
'use client';
import { LoadingStatus } from '@/helpers/loadingStatus';

/**
 * LoadingIndicator (KEEP REAL)
 * ----------------------------
 * We keep this simple real component to allow tests to assert transitions
 * from loading -> loaded -> error states. You may style it if you like.
 */
export default function LoadingIndicator({ status }: { status: LoadingStatus }) {
  if (status === 'isLoading') {
    return <p aria-label="loading">Loading…</p>;
  }
  if (status === 'hasErrored') {
    return <p role="alert">Something went wrong.</p>;
  }
  return null;
}
