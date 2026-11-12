import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-300 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /** Solid, high-contrast (cave on light / cream on dark) */
        default: "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
        /** Brand accent: rind orange on light, wax yellow on dark */
        accent: "bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground",
        /** Thin outline that fills on hover */
        outline:
          "border-foreground/30 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background aria-expanded:bg-foreground aria-expanded:text-background",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)]",
        ghost:
          "hover:bg-foreground/8 hover:text-foreground aria-expanded:bg-foreground/8",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
        /** Underlined text link with a moving underline */
        link: "rounded-none px-0! text-foreground underline decoration-1 underline-offset-[0.3em] decoration-foreground/30 hover:decoration-accent",
      },
      size: {
        default:
          "h-11 gap-2 px-6 text-sm has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
        xs: "h-7 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-4 text-[0.82rem] has-data-[icon=inline-end]:pr-1 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-14 gap-3 px-8 text-base has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-11",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-14 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
