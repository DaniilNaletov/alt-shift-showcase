import { AltLogo, Button } from '@altui'
import { IconHomeSm } from '@altui/icons'
import { Link } from 'react-router-dom'

import ProgressWidget from '@/modules/coverLetter/components/ProgressWidget/ProgressWidget'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-surface-base flex min-h-screen w-full px-2">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col pt-8 pb-[120px]">
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
