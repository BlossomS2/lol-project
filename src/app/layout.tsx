"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./globals.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  };

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <head>
        <title>라이엇🎶</title>
        <meta
          name="description"
          content="A League of Legends information app"
        />
      </head>
      <body
        className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
      >
        <nav className="bg-slate-600 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/champions">Champions</Link>
            </li>
            <li>
              <Link href="/items">Items</Link>
            </li>
            <li>
              <Link href="/rotation">Rotation</Link>
            </li>
            <li>
              <button onClick={toggleDarkMode} className="ml-4">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
