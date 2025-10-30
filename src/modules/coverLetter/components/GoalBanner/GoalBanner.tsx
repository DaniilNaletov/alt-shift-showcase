import { Button } from '@altui'
import { IconPlus } from '@altui/icons'
import cx from 'clsx'

const GoalBanner: React.FC<{ className?: string }> = ({ className }) => {
  const progress = 1
  const total = 5

  return (
    <div className={cx('bg-surface-primary rounded-xl px-2 py-[54px]', className)}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h2 className="mb-4">Hit your goal</h2>
        <p className="text-secondary mb-4">
          Generate and send out couple more job applications today to get hired faster
        </p>
        <Button variant="solid" size="large">
          <IconPlus />
          Create New
        </Button>

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
      </div>
    </div>
  )
}

export default GoalBanner
