import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const calloutVariants = cva(
  "relative rounded-lg border p-6 [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground [&>svg~*]:pl-10",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-purple-200 bg-purple-50/50 text-purple-900 dark:border-purple-800/30 dark:bg-purple-950/20 dark:text-purple-100",
        warning: "border-yellow-200 bg-yellow-50/50 text-yellow-900 dark:border-yellow-800/30 dark:bg-yellow-950/20 dark:text-yellow-100",
        success: "border-green-200 bg-green-50/50 text-green-900 dark:border-green-800/30 dark:bg-green-950/20 dark:text-green-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  icon?: React.ReactNode
  title?: string
}

export function Callout({
  children,
  variant,
  icon,
  title,
  className,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(calloutVariants({ variant }), className)}
      {...props}
    >
      {icon && <div className="absolute left-6 top-6">{icon}</div>}
      <div className={cn(icon && "pl-10")}>
        {title && (
          <h5 className="mb-2 font-semibold leading-none tracking-tight">
            {title}
          </h5>
        )}
        <div className="text-sm [&_p]:leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

