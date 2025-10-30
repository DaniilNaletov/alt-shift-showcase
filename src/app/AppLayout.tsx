import { AltLogo, Button } from '@altui'
import { IconHomeSm } from '@altui/icons'

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-surface-base min-h-screen w-full px-2">
      <div className="mx-auto max-w-[1120px] py-8">
        <header className="mb-8 flex min-h-12 flex-row items-center">
          <AltLogo />

          <div className="grow" />

          <Button variant="outlined" size="small" isIconOnly>
            <IconHomeSm />
          </Button>
        </header>

        {children}
      </div>
    </div>
  )
}

export default AppLayout
