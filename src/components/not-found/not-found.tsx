"use client";

import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';

const NotFound = ({ data }: {
  data: NotFoundType;
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen items-center justify-center text-center">
      <span className="bg-gradient-to-b to-transparent bg-clip-text text-9xl font-extrabold leading-none text-primary-500">
        404
      </span>
      <h2 className="my-2 text-2xl font-bold">
        {data.title || 'Page Not Found'}
      </h2>
      <p>{data.description || 'The page you are looking for does not exist.'}</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button
          onClick={() => router.push('/')}
          size={'lg'}
        >
          <Home className="size-4" />
          {data.buttonText || 'Go to Home'}
        </Button>
      </div>
    </div>
  )
}

export default NotFound