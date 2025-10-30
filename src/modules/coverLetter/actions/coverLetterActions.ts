import * as coverLetterApi from '@/modules/coverLetter/api'
import { CoverLetter } from '@/modules/coverLetter/model'
import { QueryService } from '@/services/query'

export const createCoverLetter = async (data: {
  title: string
  jobTitle: string
  company: string
  imGoodAt: string
  details: string
}) => {
  const coverLetter = await coverLetterApi.createCoverLetter(data)

  QueryService.getClient().setQueryData<CoverLetter[]>(['coverLetters'], (oldData) => {
    if (!oldData) {
      return oldData
    }

    return [coverLetter, ...oldData]
  })

  return coverLetter
}

export const deleteCoverLetter = async (id: string) => {
  await coverLetterApi.deleteCoverLetter(id)

  // В теории можем делать оптимистичные апдейты, но я предпочитаю дожидаться ответа сервера
  QueryService.getClient().setQueryData<CoverLetter[]>(['coverLetters'], (oldData) => {
    if (!oldData) {
      return oldData
    }

    return oldData.filter((letter) => letter.id !== id)
  })
}
