// Мы нарушаем правило и импортируем модель из фронтового модуля в целях упрощения,
// в реальности модели бека полностью отделены
import { CoverLetter } from '@/modules/coverLetter/model'

import LocalDB from './localDB'
import axios from 'axios'

interface CoverLetterData {
  title: string
  jobTitle: string
  company: string
  imGoodAt: string
  details: string
}

const emulateNetworkDelay = (delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

const generateMessage = async (data: CoverLetterData) => {
  await emulateNetworkDelay(3000)

  return `Dear ${data.company} Team,

I am writing to express my interest in the ${data.jobTitle} position.

My experience in the realm combined with my skills in ${data.imGoodAt} make me a strong candidate for this role.

${data.details}

I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.

Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`
}

const generateMessageViaAI = async (data: CoverLetterData) => {
  const response = await axios.get<{ coverLetter: string }>('/api/generate-cover-letter', {
    params: {
      jobTitle: data.jobTitle,
      company: data.company,
      imGoodAt: data.imGoodAt,
      details: data.details,
    },
  })

  return response.data.coverLetter
}

const buildCoverLetter = async (data: CoverLetterData) => {
  const isUseAIGeneration = !(localStorage?.getItem?.('use_ai') === 'false')

  const message = isUseAIGeneration ? await generateMessageViaAI(data) : await generateMessage(data)

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
  const coverLetter = await buildCoverLetter(data)

  await LocalDB.createCoverLetter(coverLetter).then(() => coverLetter)

  return coverLetter
}

const getCoverLetter = async (id: string) => {
  await emulateNetworkDelay()

  return LocalDB.getCoverLetter(id)
}

const getAllCoverLetters = async () => {
  await emulateNetworkDelay()

  return LocalDB.getAllCoverLetters()
}

const deleteCoverLetter = async (id: string) => {
  await emulateNetworkDelay()

  return LocalDB.deleteCoverLetter(id)
}
const deleteAllCoverLetters = async () => {
  await emulateNetworkDelay()

  return LocalDB.deleteAllCoverLetters()
}

const BackendService = {
  createCoverLetter,
  getCoverLetter,
  getAllCoverLetters,
  deleteCoverLetter,
  deleteAllCoverLetters,
}
export default BackendService
