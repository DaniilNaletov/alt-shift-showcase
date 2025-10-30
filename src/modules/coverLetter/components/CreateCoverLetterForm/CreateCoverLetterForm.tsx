import { Button, Input, TextArea } from '@altui'
import { IconRetry } from '@altui/icons'
import cx from 'clsx'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import TitleInput from './TitleInput'

interface Inputs {
  title: string
  jobTitle: string
  company: string
  imGoodAt: string
  details: string
}

const MAX_DETAILS_LENGTH = 1200

const CreateCoverLetterForm: React.FC<{
  onCreate: (data: Inputs) => Promise<unknown>
  className?: string
  modeTryAgain?: boolean
}> = ({ onCreate, className, modeTryAgain }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<Inputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await onCreate(data)
  }

  const details = watch('details', '')
  const detailsLength = details.length
  const isDetailsError = detailsLength > MAX_DETAILS_LENGTH

  const isFormValid = isValid && !isDetailsError

  return (
    <form className={cx('flex flex-col gap-4', className)} onSubmit={handleSubmit(onSubmit)}>
      <TitleInput
        placeholder="New application"
        {...register('title', { required: true })}
        isError={!!errors.title}
        aria-label="Application title"
      />

      <div className="flex flex-row gap-4">
        <div className="grow">
          <label className="input-label" htmlFor="jobTitle">
            Job title
          </label>
          <Input
            id="jobTitle"
            placeholder="Product manager"
            {...register('jobTitle', { required: true })}
            isError={!!errors.jobTitle}
            shakeOnError
          />
        </div>
        <div className="grow">
          <label className="input-label" htmlFor="company">
            Company
          </label>
          <Input
            id="company"
            placeholder="Apple"
            {...register('company', { required: true })}
            isError={!!errors.company}
            shakeOnError
          />
        </div>
      </div>
      <div>
        <label className="input-label" htmlFor="imGoodAt">
          I am good at...
        </label>
        <Input
          id="imGoodAt"
          placeholder="HTML, CSS and doing things in time"
          {...register('imGoodAt', { required: true })}
          isError={!!errors.imGoodAt}
          shakeOnError
        />
      </div>
      <div>
        <label className="input-label" htmlFor="details">
          Additional details
        </label>
        <TextArea
          id="details"
          placeholder="Describe why you are a great fit or paste your bio"
          className="min-h-[200px]"
          {...register('details')}
          isError={isDetailsError || !!errors.details}
          shakeOnError
        />
        <p className={cx('text-btn mt-1.5 text-xs', { 'text-danger': isDetailsError })}>
          {detailsLength}/{MAX_DETAILS_LENGTH}
        </p>
      </div>

      {modeTryAgain ? (
        <Button
          variant="outlined"
          type="submit"
          size="large"
          isDisabled={!isFormValid}
          isLoading={isSubmitting}
        >
          <IconRetry />
          Try Again
        </Button>
      ) : (
        <Button
          variant="solid"
          type="submit"
          size="large"
          isDisabled={!isFormValid && !isSubmitting}
          isLoading={isSubmitting}
        >
          Generate Now
        </Button>
      )}
    </form>
  )
}

export default CreateCoverLetterForm
