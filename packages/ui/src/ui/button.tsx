import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-900 hover:bg-slate-100",
        ghost: "hover:bg-slate-100",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className="relative group">
        {/* Effet de bordure arc-en-ciel */}
        <div className="absolute inset-0 rounded-md p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-borderGlow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bouton principal */}
        <Comp
          ref={ref}
          className={cn(
            "relative z-10 px-4 py-2 rounded-md bg-black text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105",
            buttonVariants({ variant, size }),
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
