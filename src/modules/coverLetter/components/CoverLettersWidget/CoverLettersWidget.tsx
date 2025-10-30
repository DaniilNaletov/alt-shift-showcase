import cx from 'clsx'

import useCoverLetters from '@/modules/coverLetter/hooks/useCoverLetters'

import CoverLetterItem from '../CoverLetterItem/CoverLetterItem'

const CoverLettersWidget: React.FC<{ className?: string }> = ({ className }) => {
  const { data: coverLetters, isPending, isError, error } = useCoverLetters()

  if (isPending) {
    return (
      <div className={cx('mobile:grid-cols-1 grid grid-cols-2 gap-4 gap-y-6', className)}>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-surface-secondary max-h-[248px] min-h-[248px] animate-pulse rounded-xl p-6"
          />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div
        className={cx(
          'text-danger flex min-h-[300px] flex-col items-center justify-center',
          className,
        )}
      >
        Error loading cover letters: {String(error)}
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="mobile:grid-cols-1 grid grid-cols-2 gap-4 gap-y-6">
        {coverLetters.map((coverLetter) => (
          <CoverLetterItem key={coverLetter.id} coverLetter={coverLetter} />
        ))}
      </div>
    </div>
  )
}

export default CoverLettersWidget
