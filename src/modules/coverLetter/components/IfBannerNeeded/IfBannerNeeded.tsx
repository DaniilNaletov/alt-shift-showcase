import useCoverLetters from '@/modules/coverLetter/hooks/useCoverLetters'
import { COVER_LETTERS_GOAL } from '@/modules/coverLetter/model'

const IfBannerNeeded: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: coverLetters } = useCoverLetters()
  if (coverLetters && coverLetters.length < COVER_LETTERS_GOAL) {
    return children
  }
  return null
}
export default IfBannerNeeded
