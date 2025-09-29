import clsx from "clsx";

export default function LuxButton({ children, className, ...props }: any) {
  return (
    <button
      {...props}
      className={clsx(
        "px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600",
        "text-white font-bold text-lg rounded-full",
        "shadow-[0_0_20px_rgba(255,90,0,0.5)] hover:shadow-[0_0_30px_rgba(255,90,0,0.8)]",
        "transform hover:scale-105 transition-all duration-300",
        "border-2 border-orange-400 hover:border-orange-300",
        "relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className
      )}
    >
      {children}
    </button>
  );
}