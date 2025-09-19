import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-200 dark:bg-gray-900 text-center py-4 mt-12"
      aria-label="Site footer"
    >
      <p className="text-sm text-gray-700 dark:text-gray-400">
        © {new Date().getFullYear()} Charlene Joyce Barnes. All rights reserved.
      </p>
    </footer>
  );
}
