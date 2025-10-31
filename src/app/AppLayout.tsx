import { AltLogo, Button } from '@altui'
import { IconHomeSm } from '@altui/icons'
import cx from 'clsx'
import { Link, useMatches } from 'react-router-dom'

import ProgressWidget from '@/modules/coverLetter/components/ProgressWidget/ProgressWidget'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const matches = useMatches()
  const current = matches[matches.length - 1]
  const noScroll = (current?.handle as { noScroll?: boolean })?.noScroll

  return (
    <div className="bg-surface-base flex min-h-screen w-full px-2">
      <div
        className={cx('mx-auto flex w-full max-w-[1120px] flex-col pt-8 pb-[120px]', {
          'max-h-screen overflow-hidden': noScroll,
        })}
      >
        <header className="mb-8 flex min-h-12 flex-row items-center">
          <Link to="/" className="cursor-pointer">
            <AltLogo />
          </Link>

          <div className="grow" />

          <ProgressWidget className="mr-6" />

          <Button variant="outlined" size="small" isIconOnly asChild>
            <Link to="/">
              <IconHomeSm />
            </Link>
          </Button>
        </header>

        {children}
      </div>
    </div>
  )
}

export default AppLayout
