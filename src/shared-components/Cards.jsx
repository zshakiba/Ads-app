"use client";

export const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
