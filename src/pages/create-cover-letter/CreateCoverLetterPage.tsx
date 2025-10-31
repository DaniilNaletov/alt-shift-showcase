import { useState } from 'react'

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

  return (
    <div className="flex grow flex-col overflow-auto">
      <div className="grid grow grid-cols-2 gap-8 overflow-auto">
        <CreateCoverLetterForm onCreate={handleCreate} modeTryAgain={Boolean(coverLetter)} />
        <CoverLetterPreview
          message={coverLetter?.message}
          isLoading={createCoverLetterMutation.isPending}
        />
      </div>
    </div>
  )
}

export default CreateCoverLetterPage
