import { Button } from '@altui'
import { IconCopySm, IconTrashSm } from '@altui/icons'
import cx from 'clsx'

import useCoverLetterActions from '@/modules/coverLetter/hooks/useCoverLetterActions'
import { CoverLetter } from '@/modules/coverLetter/model'
import copyToClipboard from '@/shared/helpers/copyToClipboard'

const CoverLetterItem: React.FC<{ coverLetter: CoverLetter; className?: string }> = ({
  coverLetter,
  className,
}) => {
  const { deleteCoverLetterMutation } = useCoverLetterActions()

  const handleDelete = async () => {
    await deleteCoverLetterMutation.mutateAsync(coverLetter.id)
  }

  const handleCopy = async () => {
    copyToClipboard(coverLetter.message)
  }

  return (
    <div className={cx('bg-surface-secondary relative flex flex-col rounded-xl p-6', className)}>
      <p className="text-secondary line-clamp-6 h-full max-h-[calc(1.75rem*6)] min-h-0 overflow-hidden whitespace-pre-wrap">
        {coverLetter.message}
      </p>

      <div className="mt-2 flex flex-row justify-between">
        <Button
          variant="ghost"
          className="hover:text-danger"
          isDisabled={deleteCoverLetterMutation.isPending}
          onClick={handleDelete}
        >
          <IconTrashSm />
          <span className="mobile:hidden">Delete</span>
        </Button>
        <Button variant="ghost" className="hover:text-primary" onClick={handleCopy}>
          Copy to clipboard
          <IconCopySm />
        </Button>
      </div>

      <div className="from-surface-secondary to-surface-secondary/0 absolute right-0 bottom-14 left-0 h-10 bg-gradient-to-t" />
    </div>
  )
}

export default CoverLetterItem
