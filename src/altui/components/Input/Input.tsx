import { cva, type VariantProps } from 'class-variance-authority'
import React, { useEffect, useId } from 'react'

import { cn } from '../../helpers/cn'
import { useShakeAnim } from '../../hooks/useShakeAnim/useShakeAnim'

const inputVariants = cva('whitespace-nowrap transition-all outline-hidden w-full shadow-btn', {
  variants: {
    isDisabled: {
      true: 'cursor-not-allowed',
      false: '',
    },
    isError: {
      true: '',
      false: '',
    },
    variant: {
      default: 'bg-transparent rounded-[6px] border',
    },
    size: {
      default: 'min-h-[40px] px-3 text-sm',
    },
  },
  compoundVariants: [
    {
      variant: ['default'],
      isDisabled: false,
      isError: false,
      className:
        'border-default text-default focus:border-green-3 focus:ring-4 focus:ring-green-1 placeholder:text-gray-5',
    },
    {
      variant: ['default'],
      isDisabled: true,
      isError: false,
      className: 'border-muted text-gray-3 placeholder:text-gray-3',
    },
    {
      variant: ['default'],
      isError: true,
      className: 'border-red-2 focus:ring-4 focus:ring-red-1',
    },
  ],
  defaultVariants: {
    variant: 'default',
    isDisabled: false,
    isError: false,
    size: 'default',
  },
})

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  isError?: boolean
  errorMessage?: string
  shakeOnError?: boolean
  inputClassName?: string
  errorSpace?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      id: idProp,
      name,
      inputClassName,
      isDisabled = false,
      isError = false,
      errorMessage,
      shakeOnError = false,
      errorSpace = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = idProp ?? generatedId

    const [shakeClass, shakeIt] = useShakeAnim()
    useEffect(() => {
      if (isError && shakeOnError) {
        shakeIt()
      }
    }, [shakeOnError, isError, shakeIt])

    const errorProps = isError ? { 'aria-invalid': true, 'aria-describedby': `${id}-error` } : {}

    return (
      <div className={cn('align-top', shakeClass, className)}>
        <input
          ref={ref}
          id={id}
          name={name}
          className={cn(inputVariants({ variant, size, isDisabled, isError }), inputClassName)}
          disabled={isDisabled ?? undefined}
          {...errorProps}
          {...props}
        />
        {errorSpace && !errorMessage ? <div className="mt-1 h-5" /> : null}
        {errorMessage && (
          <span id={`${id}-error`} className="text-danger mt-1 block text-xs">
            {errorMessage}
          </span>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
