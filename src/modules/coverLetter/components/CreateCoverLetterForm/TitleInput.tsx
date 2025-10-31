import { cn } from '@altui'

const TitleInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    isError?: boolean
  }
> = (props) => {
  const { isError, className, ...rest } = props

  return (
    <input
      className={cn(
        'text-h2 border-muted placeholder:text-gray-5 mobile:text-h2-mob border-b pb-3 transition-all outline-none focus:shadow-[0_4px_0_0_var(--tw-ring-color)]',
        { 'focus:border-green-3 ring-green-1': !isError },
        { 'border-red-2 ring-red-1': isError },
        className,
      )}
      {...rest}
    />
  )
}

export default TitleInput
