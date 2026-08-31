"use client";

import useNetwork from '@/hooks/useNetwork';
import React, { useEffect } from 'react';
import NoInternetComponent from './NoInternetComponent';

const NetworkStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const isOnline = useNetwork();

  useEffect(() => {
    if (!isOnline) {
      console.log("Offline now");
    } else {
      console.log("Online now");
    }
  }, [isOnline]);

  return (
    <div className="flex justify-center items-center text-gray-800 dark:text-white">
      <main>
        {/* If offline, show NoInternetComponent, it will show normal content */}
        {!isOnline ? <NoInternetComponent /> : children}
      </main>
    </div>
  );
}

export default NetworkStatusProvider;