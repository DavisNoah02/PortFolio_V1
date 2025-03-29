import React from "react";

export const Footer = () => {
  // Get the current date in Kenya timezone
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Nairobi",
  }).format(currentDate);

  // Get the current hour in Kenya timezone
  const currentHour = new Date().toLocaleString("en-US", {
    hour: "numeric",
    hour12: false,
    timeZone: "Africa/Nairobi",
  });

  // Determine the greeting based on the hour
  let greeting = "Good Evening 🌅";
  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good Morning ☀️";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon 🌤️";
  }

  // Get the current year
  const currentYear = currentDate.getFullYear();

  return (
    <>
     
      <hr className="border-t border-gray-600 w-3/4 mx-auto mb-3" />

      <footer className="bg-gray-900 text-white py-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-300"> Noah Dave </h1>
  
        {/* Greeting with Date */}
        <p className="text-base text-gray-300 mt-2">
          {greeting}, {formattedDate}
        </p>
  
        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {currentYear} Noah Dave. All rights reserved.
        </p>
      </footer>
    </>
  );
};