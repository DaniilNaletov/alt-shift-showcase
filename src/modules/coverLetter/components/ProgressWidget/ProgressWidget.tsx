import { IconCircleCheck } from '@altui/icons'
import cx from 'clsx'

import useCoverLetters from '@/modules/coverLetter/hooks/useCoverLetters'
import { COVER_LETTERS_GOAL } from '@/modules/coverLetter/model'

const ProgressWidget: React.FC<{ className?: string }> = ({ className }) => {
  const { data: coverLetters, isPending, isError } = useCoverLetters()
  if (isPending) {
    return <div className={cx('bg-gray-1 h-7 w-[220px] animate-pulse rounded-lg', className)} />
  }
  if (isError) {
    return null
  }

  const progress = Math.min(coverLetters.length, COVER_LETTERS_GOAL)
  const isDone = progress >= COVER_LETTERS_GOAL

  return (
    <div
      className={cx(
        'flex flex-row items-center gap-4',
        {
          'mobile:flex-col mobile:items-start mobile:gap-1': !isDone,
        },
        className,
      )}
    >
      <p className="text-secondary mobile:text-xs">
        {progress}/{COVER_LETTERS_GOAL} applications generated
      </p>

      {isDone ? (
        <IconCircleCheck className="shrink-0" />
      ) : (
        <div className="flex flex-row items-center gap-1">
          {Array.from({ length: COVER_LETTERS_GOAL }).map((_, index) => (
            <span
              key={index}
              className={cx('h-2 w-2 rounded-full', {
                'bg-gray-8': index < progress,
                'bg-gray-8/25': index >= progress,
              })}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProgressWidget
