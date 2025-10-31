import { Button } from '@altui'
import { IconCircleCheck, IconCopySm } from '@altui/icons'
import cx from 'clsx'

import useCopy from '@/shared/hooks/useCopy'

import BallLoader from '../BallLoader/BallLoader'

const CoverLetterPreview: React.FC<{
  message?: string
  isLoading?: boolean
  className?: string
}> = ({ message, isLoading, className }) => {
  const placeholder = 'Your personalized job application will appear here...'

  const { isCopied, copy } = useCopy()
  const handleCopy = async () => {
    copy(message)
  }

  return (
    <div
      className={cx(
        'bg-surface-secondary relative flex flex-col justify-center overflow-auto rounded-xl',
        className,
      )}
    >
      <p className="text-secondary min-h-[200px] grow overflow-auto px-6 pt-6 pb-[80px] break-words whitespace-pre-wrap">
        {message || placeholder}
      </p>

      <div
        className={cx(
          'bg-surface-secondary absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500',
          { 'opacity-100': isLoading },
          { 'pointer-events-none': !isLoading },
        )}
      >
        <BallLoader />
      </div>

      {message ? (
        <>
          <div className="bg-surface-secondary absolute right-0 bottom-0 left-0 flex flex-row justify-end p-6 pt-4">
            <Button
              variant="ghost"
              className="hover:text-primary"
              isDisabled={!message}
              onClick={handleCopy}
            >
              Copy to clipboard
              {isCopied ? (
                <IconCircleCheck className="copy-icon-animation h-5 w-5" />
              ) : (
                <IconCopySm />
              )}
            </Button>
          </div>
          <div className="from-surface-secondary to-surface-secondary/0 absolute right-0 bottom-16 left-0 h-10 bg-gradient-to-t" />
        </>
      ) : null}
    </div>
  )
}
export default CoverLetterPreview
