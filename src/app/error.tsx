'use client';


import ErrorPage from '@/components/error-page';

export default function Error({
  error,
}: {
  error: Error & { digest?: string; status?: number };
}) {
  console.error('Full Error:', error);
  return (
    <ErrorPage
      statusCode={error?.status || 500}
      title={error?.name}
      message={error?.message}
      helperTexts={{
        retry: 'Retry',
        home: 'Go To Home',
        contact: 'Still Having Issues',
        back: 'Go To Back',
      }}
    />
  );
}
