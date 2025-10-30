import Backend from '@/backend'

interface CoverLetterData {
  title: string
  jobTitle: string
  company: string
  imGoodAt: string
  details: string
}

export const createCoverLetter = async (data: CoverLetterData) => {
  return Backend.createCoverLetter(data)
}

export const getCoverLetter = async (id: string) => {
  return Backend.getCoverLetter(id)
}

export const getAllCoverLetters = async () => {
  return Backend.getAllCoverLetters()
}

export const deleteCoverLetter = async (id: string) => {
  return Backend.deleteCoverLetter(id)
}

export const deleteAllCoverLetters = async () => {
  return Backend.deleteAllCoverLetters()
}
