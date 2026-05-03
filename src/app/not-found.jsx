import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
   

    <div className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content text-base-content">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <p className="py-6 text-2xl font-semibold">Oops! Page not found.</p>
          <p className="mb-6">Sorry, we couldn't find the page you're looking for. Perhaps you'd like to return to our homepage?</p>
          <Link href={"/"} className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
