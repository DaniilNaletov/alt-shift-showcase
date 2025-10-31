import { cva, type VariantProps } from 'class-variance-authority'
import cx from 'clsx'
import React, { useEffect, useId } from 'react'

import { useShakeAnim } from '../../hooks/useShakeAnim/useShakeAnim'

const inputVariants = cva(
  'transition-colors py-[12px] px-[14px] outline-hidden w-full resize-none placeholder:whitespace-pre-wrap',
  {
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
        default: 'bg-transparent rounded-[8px] border min-h-[60px] text-sm placeholder:text-gray-5',
      },
    },
    compoundVariants: [
      {
        variant: ['default'],
        isDisabled: false,
        isError: false,
        className:
          'border-default text-default focus:border-green-3 focus:ring-4 focus:ring-green-1',
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
    },
  },
)

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputVariants> {
  isError?: boolean
  errorMessage?: string
  shakeOnError?: boolean
  inputClassName?: string
  errorSpace?: boolean
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
      <div className={cx('flex align-top', shakeClass, className)}>
        <textarea
          ref={ref}
          id={id}
          name={name}
          className={cx(inputVariants({ variant, isDisabled, isError }), inputClassName)}
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
TextArea.displayName = 'TextArea'

export { TextArea }
