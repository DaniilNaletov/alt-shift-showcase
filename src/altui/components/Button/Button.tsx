/* eslint-disable react/no-children-prop */
/* eslint-disable react/button-has-type */
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import { cn } from '../../helpers/cn'
import Spinner from '../Spinner/Spinner'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 font-semibold align-middle',
  {
    variants: {
      isIconOnly: {
        true: 'shrink-0',
        false: '',
      },
      isLoading: {
        true: '',
        false: '',
      },
      isDisabled: {
        true: 'cursor-not-allowed',
        false: '',
      },
      variant: {
        solid: 'rounded text-white bg-primary shadow-btn',
        outlined: 'bg-transparent border rounded border-default text-label shadow-btn',
        ghost: 'bg-transparent text-btn',
      },
      size: {
        large: 'min-h-[60px] px-[28px] text-base gap-3',
        default: 'min-h-[44px] px-[18px] text-sm gap-2',
        small: 'min-h-[40px] px-[10px] text-sm gap-2',
      },
    },
    compoundVariants: [
      /* ======== Solid ======== */
      {
        variant: ['solid'],
        isDisabled: false,
        isLoading: false,
        className: 'hover:bg-primary/95 hover:shadow-btn2',
      },
      {
        variant: ['solid'],
        isDisabled: true,
        className: 'bg-gray-3 text-gray-4',
      },

      /* ======== Outlined ======== */
      {
        variant: ['outlined'],
        isDisabled: false,
        isLoading: false,
        className: 'hover:shadow-btn2',
      },
      {
        variant: ['outlined'],
        isDisabled: true,
        className: 'border-gray-3 text-gray-4',
      },

      /* ======== Ghost ======== */
      {
        variant: ['ghost'],
        className: 'min-h-[24px] px-0',
      },
      {
        variant: ['ghost'],
        isDisabled: false,
        isLoading: false,
        className: 'hover:text-btn/90',
      },
      {
        variant: ['ghost'],
        isDisabled: true,
        className: '!text-gray-4',
      },

      /* ======== Icon Only ======== */
      {
        size: ['large'],
        isIconOnly: true,
        className: 'w-[60px] !p-0',
      },
      {
        size: ['default'],
        isIconOnly: true,
        className: 'w-[44px] !p-0',
      },
      {
        size: ['small'],
        isIconOnly: true,
        className: 'w-[40px] !p-0',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'default',
      isLoading: false,
      isDisabled: false,
    },
  },
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isDisabled = false,
      isLoading = false,
      isIconOnly = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            isDisabled,
            isLoading,
            isIconOnly,
            className,
          }),
        )}
        disabled={(isDisabled || isLoading) ?? undefined}
        {...props}
        children={isLoading ? <Spinner sm /> : props.children}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
