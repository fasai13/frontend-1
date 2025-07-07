'use client';

import { useEffect, useState } from 'react';

export default function Effect() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Hello from useEffect!');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <></>
  );
}