import CreateCoverLetterForm from '@/modules/coverLetter/components/CreateCoverLetterForm/CreateCoverLetterForm'

const CreateCoverLetterPage: React.FC = () => {
  const handleCreate = async (data: {
    title: string
    jobTitle: string
    company: string
    imGoodAt: string
    details: string
  }) => {
    console.log('Creating cover letter with data:', data)
  }
  return (
    <div className="flex grow flex-col">
      <div className="grid grow grid-cols-2 gap-8">
        <CreateCoverLetterForm onCreate={handleCreate} modeTryAgain />
        <div>
          <div className="bg-surface-secondary h-full w-full rounded-xl p-6">
            <p className="text-secondary">Hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCoverLetterPage
