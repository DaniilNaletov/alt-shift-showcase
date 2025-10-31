import cx from 'clsx'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

import cm from './Notifications.module.css'

export const notify = (config: {
  message: string
  variant: 'success' | 'error' | 'neutral' | 'warning'
  duration?: number
  id?: string
}) => {
  const { message, variant, duration = 2000, id } = config

  return toast.custom(
    (t) => {
      return (
        <div
          className={cx(
            'mobile:text-sm flex flex-row items-center gap-3 rounded-lg px-4 py-2 shadow-xl',
            {
              [cm.showToast]: t.visible,
              [cm.hideToast]: !t.visible,

              'bg-surface-danger text-white': variant === 'error',
              'bg-surface-success text-white': variant === 'success',
              'bg-surface-base text-secondary': variant === 'neutral',
            },
          )}
        >
          <div>
            <p className="break-words whitespace-pre-wrap">{message}</p>
          </div>
        </div>
      )
    },
    { duration, id },
  )
}

export const NotificationsRoot: React.FC = () => {
  return <Toaster position="bottom-center" containerClassName={cm.notificationsContainer} />
}
