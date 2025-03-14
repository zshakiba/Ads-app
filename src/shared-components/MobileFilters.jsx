"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function MobileFilters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="min-w-[320px] w-1/4 max-w-[360px] pb-2">
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/25"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Filters Dialog */}
      <div
        className={`fixed inset-0 z-40 flex transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-secondary-900">Filters</h2>
            <button
              type="button"
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-secondary-400"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Filters Content */}
          <form className="mt-4 border-t border-secondary-200">
            {/* Add your filter sections here */}
          </form>
        </div>
      </div>
    </aside>
  );
}