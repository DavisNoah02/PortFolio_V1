import React from "react";

export const Spinner = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-[110] flex flex-col items-center justify-center pointer-events-none ">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
      <p className="text-white text-sm font-medium animate-pulse">{message}</p>
    </div>
  );
};
