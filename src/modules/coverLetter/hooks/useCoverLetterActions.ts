import { useMutation } from '@tanstack/react-query'

import * as coverLetterActions from '@/modules/coverLetter/actions'

const useCoverLetterActions = () => {
  const createCoverLetterMutation = useMutation({
    mutationFn: async (data: {
      title: string
      jobTitle: string
      company: string
      imGoodAt: string
      details: string
    }) => {
      return coverLetterActions.createCoverLetter(data)
    },
  })

  const deleteCoverLetterMutation = useMutation({
    mutationFn: async (id: string) => {
      return coverLetterActions.deleteCoverLetter(id)
    },
  })

  return {
    createCoverLetterMutation,
    deleteCoverLetterMutation,
  }
}

export default useCoverLetterActions
