import { notify } from '@altui'
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
    onError: (error) => {
      notify({ message: 'Failed to create cover letter.', variant: 'error' })
    },
  })

  const deleteCoverLetterMutation = useMutation({
    mutationFn: async (id: string) => {
      return coverLetterActions.deleteCoverLetter(id)
    },
    onError: (error) => {
      notify({ message: 'Failed to delete cover letter.', variant: 'error' })
    },
  })

  return {
    createCoverLetterMutation,
    deleteCoverLetterMutation,
  }
}

export default useCoverLetterActions
