import { AltLogo, Button, IfScreen } from '@altui'
import { IconHomeSm } from '@altui/icons'
import cx from 'clsx'
import { Link, useMatches } from 'react-router-dom'

import ProgressWidget from '@/modules/coverLetter/components/ProgressWidget/ProgressWidget'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const matches = useMatches()
  const current = matches[matches.length - 1]
  const noScroll = (current?.handle as { noScroll?: boolean })?.noScroll

  return (
    <div className="bg-surface-base flex min-h-screen w-full">
      <div
        className={cx(
          'mobile:px-2 mx-auto flex w-full max-w-[1152px] flex-col px-4 pt-8 pb-[120px]',
          {
            'desk:max-h-screen desk:overflow-hidden': noScroll,
          },
        )}
      >
        <header className="mb-8 flex min-h-12 flex-row items-center">
          <Link to="/" className="cursor-pointer">
            <IfScreen desktop={<AltLogo />} mobile={<AltLogo minimal />} />
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
