import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Data fetching failed</h2>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}