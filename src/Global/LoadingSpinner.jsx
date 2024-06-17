import React from 'react';
import { useLoading } from '../context/LoadingContext';
import { Spinner } from "@material-tailwind/react";

const LoadingSpinner = () => {
  const { loading } = useLoading();

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <Spinner size="xl" color="blue" />
    </div>
  );
};

export default LoadingSpinner;
