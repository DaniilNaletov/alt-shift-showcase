import { Button, IfScreen } from '@altui'
import { IconRetry } from '@altui/icons'
import cx from 'clsx'
import { useEffect, useState } from 'react'

import CoverLetterPreview from '@/modules/coverLetter/components/CoverLetterPreview/CoverLetterPreview'
import CreateCoverLetterForm from '@/modules/coverLetter/components/CreateCoverLetterForm/CreateCoverLetterForm'
import useCoverLetterActions from '@/modules/coverLetter/hooks/useCoverLetterActions'
import { CoverLetter } from '@/modules/coverLetter/model'

const CreateCoverLetterPage: React.FC = () => {
  const [coverLetter, setCoverLetter] = useState<CoverLetter | null>(null)

  const { createCoverLetterMutation } = useCoverLetterActions()

  const handleCreate = async (data: {
    title: string
    jobTitle: string
    company: string
    imGoodAt: string
    details: string
  }) => {
    const coverLetter = await createCoverLetterMutation.mutateAsync(data)
    setCoverLetter(coverLetter)
  }

  const [step, setStep] = useState<'form' | 'preview'>('form')
  useEffect(() => {
    if (createCoverLetterMutation.isPending) {
      setStep('preview')
    }
  }, [createCoverLetterMutation.isPending])

  return (
    <div className="flex grow flex-col overflow-auto">
      <IfScreen
        desktop={
          <div className="grid grow grid-cols-2 gap-8 overflow-auto">
            <CreateCoverLetterForm onCreate={handleCreate} modeTryAgain={Boolean(coverLetter)} />
            <CoverLetterPreview
              message={coverLetter?.message}
              isLoading={createCoverLetterMutation.isPending}
            />
          </div>
        }
        mobile={
          <div className="overflow-auto">
            <CreateCoverLetterForm
              onCreate={handleCreate}
              modeTryAgain={Boolean(coverLetter)}
              className={cx({ hidden: step === 'preview' })}
            />

            {step === 'preview' ? (
              <>
                <CoverLetterPreview
                  message={coverLetter?.message}
                  isLoading={createCoverLetterMutation.isPending}
                  className="min-h-[600px]"
                />
                <Button
                  variant="outlined"
                  className="mt-4 w-full"
                  onClick={() => setStep('form')}
                  size="large"
                  isDisabled={createCoverLetterMutation.isPending}
                >
                  <IconRetry />
                  Back to edit
                </Button>
              </>
            ) : null}
          </div>
        }
      />
    </div>
  )
}

export default CreateCoverLetterPage
