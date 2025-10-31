import { useQuery } from '@tanstack/react-query'

import * as coverLetterApi from '@/modules/coverLetter/api'

const useCoverLetters = () => {
  return useQuery({
    queryKey: ['coverLetters'],
    queryFn: async () => {
      return coverLetterApi.getAllCoverLetters()
    },
    select: (data) =>
      data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()),
  })
}

export default useCoverLetters
