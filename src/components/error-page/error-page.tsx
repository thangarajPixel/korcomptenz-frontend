'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ChevronRight, FileQuestion, AlertCircle, RefreshCw, Home } from "lucide-react";
import { Button } from '../ui/button';
import { Card } from '../ui/card';

type ErrorPageProps = {
  statusCode: number;
  title: string;
  message: object | string;
  helperTexts?: {
    retry?: string;
    home?: string;
    contact?: string;
    back?: string;
  };
};

export const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode,
  title,
  message,
  helperTexts,
}) => {
  const router = useRouter();
  const handleReset = React.useCallback(async () => {
    switch (statusCode) {
      case 400:
        router.push('/posts');
        break;
      case 429:
        router.push('/posts');
        break;
      case 401:
        router.push('/login');
        break;
      case 404:
        router.push('/posts');
        break;
      case 500:
        router.push('/posts');
        break;
      case 403:
        router.push('/login');
        break;
      default:
        router.push('/posts');
        break;
    }
  }, [router, statusCode]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="mb-8 flex justify-center">
          {/* <Logo height={40} /> */}
        </div>

        <Card className="w-full overflow-visible">
          <div className="p-6 md:p-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="mb-6 flex justify-center"
            >
              {statusCode === 404
                ? (

                  <FileQuestion
                    className="size-20 text-yellow-200"
                  />
                )
                : (
                  <AlertCircle
                    className="size-20 text-destructive"
                  />
                )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-center"
            >
              <h1 className="truncate text-2xl font-bold text-foreground md:text-3xl">
                {statusCode}
                {' '}
                -
                {title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-center"
            >
              {typeof message === 'string'
                ? (
                  <p className="text-medium text-foreground-500">
                    {message}
                  </p>
                )
                : (Object.entries(message)?.map(([key, value]) => (
                  <p className="text-medium text-foreground-500" key={key}>
                    {value}
                  </p>
                )))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Button
                onClick={() => {
                  router.back();
                }}
                size={'lg'} >
                {helperTexts?.back}
                <ChevronRight className="size-4" />
              </Button>
              <Button
                onClick={handleReset}
                size={'lg'}
                variant={'outline'}
              >
                <RefreshCw className="size-4" />
                {helperTexts?.retry}
              </Button>
              <Button
                onClick={() => {
                  router.push('/posts');
                }}
                size={'lg'}
              >
                <Home className="size-4" />
                {helperTexts?.home}
              </Button>
            </motion.div>
          </div>

          {/* <Divider /> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-4 text-center"
          >
            <p className="flex items-center justify-center gap-1 text-xs text-foreground-400">
              {/* <Icon icon="lucide:help-circle" className="size-4" /> */}
              {helperTexts?.contact || 'Still having issues? Contact us at'}
              {' '}
              <a
                // href={`mailto:${AppConfig.supportEmail}`}
                className="text-primary hover:underline"
              >
                {/* {AppConfig.supportEmail} */}
              </a>
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};
