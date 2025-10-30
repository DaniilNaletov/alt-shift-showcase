import Backend from '@/backend'

// Мы используем внутренний "backend" здесь, в реальном приложении здесь были бы вызовы API, типа:
// await ApiService.userInstance.get<CoverLetterResponse>(`/coverLetter/${id}`);
// Мы также полагаем что с бэка пришли теже интерфейсы что и в нашей модели,
// но в реальном приложении в обязательном порядке необходимо отдельять бэковские модели и пропускать их
// через слой адаптеров, превращая в модели приложения, во избежании "хрупкого" фронтенда.

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
