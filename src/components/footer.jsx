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
      <hr className="border-t border-gray-400 w-3/4 mx-auto mb-3" />
  
      <footer className="bg-gradient-custom2 text-white py-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-blue-600">Noah Dave Munene</h1>
  
        {/* Responsive Nav Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-lg font-medium text-gray-400">
          {["About", "Skills", "Projects", "Education","Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
  
        {/* Greeting with Date */}
        <p className="text-base text-green-200">{greeting}, {formattedDate}</p>
  
        {/* Copyright */}
        <p className="text-sm text-gray-400">© {currentYear} Noah Dave. All rights reserved.</p>
      </footer>
    </>
  );
};