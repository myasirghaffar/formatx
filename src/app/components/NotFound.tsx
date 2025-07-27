import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Image 
            src="/not-found.svg" 
            alt="404 Not Found" 
            width={320} 
            height={220}
            className="max-w-full h-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-2">Oops! Page not found</h2>
        <p className="text-gray-500 mb-6">The page you are looking for doesn&apos;t exist or is unavailable.</p>
        <Link href="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 font-semibold transition">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;