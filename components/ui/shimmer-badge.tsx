import * as React from "react"
import { cn } from "@/lib/utils"

interface ShimmerBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  shimmerColor?: string
}

export function ShimmerBadge({
  children,
  className,
  shimmerColor = "#a78bfa",
  ...props
}: ShimmerBadgeProps) {
  return (
    <div
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-medium transition-all",
        // Light mode
        "bg-gradient-to-r from-purple-100 via-violet-50 to-purple-100",
        "border border-purple-300",
        "hover:border-purple-400 hover:shadow-xl hover:shadow-purple-300/50",
        // Dark mode
        "dark:bg-gradient-to-r dark:from-purple-950/50 dark:via-violet-950/40 dark:to-purple-950/50",
        "dark:border-purple-500/30",
        "dark:hover:border-purple-400/50 dark:hover:shadow-purple-500/30",
        className
      )}
      {...props}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:[transform:skew(-12deg)_translateX(100%)] transition-transform duration-1000"
        style={{
          background: `linear-gradient(90deg, transparent, ${shimmerColor}40, transparent)`,
        }}
      />
      
      {/* Animated gradient border - pulse yok, sadece smooth transition */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-700 dark:from-purple-500 dark:via-violet-400 dark:to-purple-500 dark:group-hover:opacity-15" />
      
      {/* Content */}
      <div className="relative flex items-center gap-2 text-sm font-semibold text-purple-700 group-hover:text-purple-900 dark:text-purple-200 dark:group-hover:text-white transition-colors">
        {children}
      </div>
      
      {/* Subtle glow - mor tonlarda */}
      <div className="absolute inset-0 rounded-full bg-purple-300/20 dark:bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  )
}

