import Select from "./Select";

export function RHFSelect({ label, name, field, options, required, placeholder }) {
  
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "0.375rem 0",
      backgroundColor: state.isFocused
        ? "rgb(255 255 255)"
        : "rgb(243 244 246)",
      borderColor: state.isFocused ? "rgb(249 115 22)" : "rgb(243 244 246)",
      borderRadius: "0.75rem",
      fontSize: "0.875rem",
      boxShadow: state.isFocused
        ? "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color), 0 10px 15px -3px rgb(249 115 22 / 0.1), 0 4px 6px -4px rgb(249 115 22 / 0.1)"
        : "none",
      transition: "all 300ms ease-out",
      "&:hover": {
        borderColor: "rgb(249 115 22)",
      },
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "0.875rem",
    }),
  };

  return (
    <div>
      <label htmlFor={name} className="block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <Select
        {...field} // Use the field object directly here
        options={options}
        styles={customStyles}
        placeholder={placeholder}
        isSearchable={true}
        className="w-full"
        classNamePrefix="react-select"
        instanceId={name}
        theme={(theme) => ({
          ...theme,
          fontSize: "0.875rem",
          colors: {
            ...theme.colors,
            primary: "#FDB588",
            primary25: "#FDB58820",
            primary50: "#FDB58840",
          },
        })}
      />
    </div>
  );
}
