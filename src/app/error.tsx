'use client';

import { ErrorPage } from '@/components/error-page/error-page';

const Error = ({
  error,
}: {
  error: Error & { digest?: string; status?: number; };
}) => {
  return <ErrorPage
    statusCode={error?.status || 500}
    title={error?.message}
    message={error?.message}
    helperTexts={{
      retry: 'Retry',
      home: 'Home',
      contact: 'Contact',
      back: 'Back',
    }} />;
};
export default Error;

