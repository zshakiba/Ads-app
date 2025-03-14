export default function FilterCheckbox({ id, label, checked, onChange }) {
  return (
    <div className="flex gap-3">
      <div className="flex h-5 shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              console.log("Checkbox changed:", e.target.checked);
              onChange(e.target.checked);
            }}
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-secondary-300 bg-white checked:border-primary-600 checked:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          />
          <svg
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-secondary-950/25"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              className="opacity-0 group-has-checked:opacity-100"
              d="M3 8L6 11L11 3.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <label htmlFor={id} className="text-sm text-secondary-600">
        {label}
      </label>
    </div>
  );
}
