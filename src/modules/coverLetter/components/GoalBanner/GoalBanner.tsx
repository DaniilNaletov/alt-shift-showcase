import { Button } from '@altui'
import { IconPlus } from '@altui/icons'
import cx from 'clsx'

import useCoverLetterActions from '@/modules/coverLetter/hooks/useCoverLetterActions'
import useCoverLetters from '@/modules/coverLetter/hooks/useCoverLetters'

const GoalBanner: React.FC<{ className?: string }> = ({ className }) => {
  const { data: coverLetters, isPending, isError } = useCoverLetters()
  const total = 5
  const progress = Math.min(coverLetters?.length ?? 0, total)

  const { createCoverLetterMutation } = useCoverLetterActions()

  const handleCreateNew = async () => {
    await createCoverLetterMutation.mutateAsync({
      title: 'New Cover Letter',
      jobTitle: 'Software Engineer',
      company: 'AltShift',
      imGoodAt: 'Node.js, React, TypeScript',
      details: 'Idk, just make it good',
    })
  }

  return (
    <div className={cx('bg-surface-primary rounded-xl px-2 py-[54px]', className)}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h2 className="mb-4">Hit your goal</h2>
        <p className="text-secondary mb-4">
          Generate and send out couple more job applications today to get hired faster
        </p>
        <Button variant="solid" size="large" onClick={handleCreateNew}>
          <IconPlus />
          Create New
        </Button>

        {!isPending && !isError ? (
          <div className="mt-8">
            <div className="flex flex-row gap-1">
              {Array.from({ length: total }).map((_, index) => (
                <div
                  key={index}
                  className={cx('bg-gray-8 h-2 w-8 rounded-full', {
                    'opacity-25': index + 1 > progress,
                  })}
                />
              ))}
            </div>
            <p className="text-secondary mt-2">
              {progress} out of {total}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default GoalBanner
