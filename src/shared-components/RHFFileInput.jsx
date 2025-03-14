export default function RHFFileInput({
    label,
    name,
    register,
    errors,
    isRequired,
    validationSchema = {},
    dir = "rtl",
    ...rest
  }) {
    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);
  
    return (
      <div
        className={`fileInputField relative ${hasError ? "fileInputField--invalid" : ""}`}
      >
        <label htmlFor={name} className="mb-2 block text-secondary-700">
          {label}
          {isRequired && <span className="text-error">*</span>}
        </label>
        <input
          type="file"
          id={name}
          dir={dir}
          className="fileInputField__input"
          {...register(name, validationSchema)}
          {...rest}
        />
        {errors && errors[name] && (
          <span className="text-red-600 block text-xs mt-2">
            {errors[name]?.message}
          </span>
        )}
      </div>
    );
  }
  