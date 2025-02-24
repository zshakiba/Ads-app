// components/FilterCheckbox.tsx
import { CheckIcon } from "@heroicons/react/24/outline";

export default function FilterCheckbox({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-5 shrink-0 items-center">
        <div className="group grid h-4 w-4 grid-cols-1">
          <input
            id={id}
            name={name}
            value={value}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
          <CheckIcon className="pointer-events-none col-start-1 row-start-1 h-3.5 w-3.5 self-center justify-self-center stroke-white opacity-0 group-has-[input:checked]:opacity-100" />
        </div>
      </div>
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
    </div>
  );
}
