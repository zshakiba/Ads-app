"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FilterSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="font-medium text-gray-900">{title}</span>
          <span className="ml-6 flex items-center">
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </span>
        </button>
      </h3>
      {isOpen && <div className="pt-6">{children}</div>}
    </div>
  );
}
