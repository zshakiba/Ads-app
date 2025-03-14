"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function FilterSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-secondary-100 border-2 rounded-2xl p-4">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between  py-3 text-sm text-secondary-400 hover:text-secondary-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className="font-medium text-secondary-900">{title}</span>
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
