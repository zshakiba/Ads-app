import { cn } from "@/utils/cn";

const Badge = ({ variant = "default", size = "md", className, children }) => {
  const variantStyles = {
    default: "bg-green-100 text-green-700",
    secondary: "bg-secondary-100 text-secondary-700",
    destructive: "bg-red-100 text-red-700",
    outline: "bg-transparent border-2 border-primary-100 text-primary-600",
  };

  const sizeStyles = {
    xs: "text-xs px-1 py-0.5",
    sm: "text-sm px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  const badgeClassName = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return <span className={badgeClassName}>{children}</span>;
};
export default Badge;
