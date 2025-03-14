"use client";

import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
  { id: 1, label: "مرحله ۱", completed: true },
  { id: 2, label: "مرحله ۲", completed: true },
  { id: 3, label: "مرحله ۳", completed: false },
  { id: 4, label: "مرحله ۴", completed: false },
];

export function toPersianDigits(n) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export default function ProgressStepper() {
  return (
    <div className="flex items-center max-w-screen-lg mx-auto my-4" dir="ltr">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center w-full">
          {/* دایره نشان‌دهنده مرحله */}
          <div
            className={`w-6 h-6 shrink-0 mx-[-1px] flex flex items-center justify-center rounded-full ring-2 ring-secondary-300 ring-offset-4 ${
              step.completed ? "bg-green-500" : "bg-secondary-300"
            }`}
          >
            {step.completed ? (
              <CheckIcon className="w-4 h-4 text-secondary-200" />
            ) : (
              <span className="text-sm text-secondary-500">
                {toPersianDigits(step.id)}
              </span>
            )}
          </div>

          {/* خط اتصال بین مراحل (به جز آخرین مرحله) */}
          {index < steps.length - 1 && (
            <div className="w-full h-0.5 bg-secondary-300 mx-[5px]"></div>
          )}
        </div>
      ))}
    </div>
  );
}
