import { useQuery } from '@tanstack/react-query'

import * as coverLetterApi from '@/modules/coverLetter/api'

const useCoverLetters = () => {
  return useQuery({
    queryKey: ['coverLetters'],
    queryFn: async () => {
      return coverLetterApi.getAllCoverLetters()
    },
  })
}

export default useCoverLetters
