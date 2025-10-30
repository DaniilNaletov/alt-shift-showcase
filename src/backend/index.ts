// Мы используем модель из фронтового модуля в целях упрощения, в реальности модели бека полностью отделены
import { CoverLetter } from '@/modules/coverLetter/model'

import LocalDB from './localDB'

interface CoverLetterData {
  title: string
  jobTitle: string
  company: string
  imGoodAt: string
  details: string
}

const generateMessage = (data: CoverLetterData) => {
  return `Dear ${data.company} Team,

I am writing to express my interest in the ${data.jobTitle} position.

My experience in the realm combined with my skills in ${data.imGoodAt} make me a strong candidate for this role.

${data.details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`
}

const buildCoverLetter = (data: CoverLetterData) => {
  const message = generateMessage(data)

  const coverLetter: CoverLetter = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    title: data.title,
    jobTitle: data.jobTitle,
    company: data.company,
    imGoodAt: data.imGoodAt,
    details: data.details,
    message,
  }

  return coverLetter
}

const createCoverLetter = async (data: CoverLetterData) => {
  const coverLetter = buildCoverLetter(data)

  await LocalDB.createCoverLetter(coverLetter).then(() => coverLetter)

  return coverLetter
}

const getCoverLetter = async (id: string) => {
  return LocalDB.getCoverLetter(id)
}

const getAllCoverLetters = async () => {
  return LocalDB.getAllCoverLetters()
}

const deleteCoverLetter = async (id: string) => {
  return LocalDB.deleteCoverLetter(id)
}
const deleteAllCoverLetters = async () => {
  return LocalDB.deleteAllCoverLetters()
}

const Backend = {
  createCoverLetter,
  getCoverLetter,
  getAllCoverLetters,
  deleteCoverLetter,
  deleteAllCoverLetters,
}
export default Backend
