import { AltLogo, Button, Input, TextArea } from '@altui'
import { IconCopySm, IconHomeSm } from '@altui/icons'
import * as Icons from '@altui/icons'

const TestUIPage: React.FC = () => {
  const buttonSizes = ['small', 'default', 'large'] as const

  return (
    <div className="bg-gray-1 min-h-full w-full p-8">
      <div className="bg-surface-base mx-auto max-w-3xl rounded-2xl p-4">
        <div className="mb-4 flex flex-row items-center justify-between">
          <AltLogo />
          <h1 className="text-h2">AltUI</h1>
        </div>

        <hr />

        <div className="mt-8 flex flex-col gap-12">
          <section>
            <h3 className="text-label font-semibold">Color Palette</h3>
            <div className="text-secondary mt-2 mb-2">Gray</div>
            <div className="grid grid-cols-9 gap-2">
              <div className="bg-gray-1 h-16 w-full rounded-lg" />
              <div className="bg-gray-2 h-16 w-full rounded-lg" />
              <div className="bg-gray-3 h-16 w-full rounded-lg" />
              <div className="bg-gray-4 h-16 w-full rounded-lg" />
              <div className="bg-gray-5 h-16 w-full rounded-lg" />
              <div className="bg-gray-6 h-16 w-full rounded-lg" />
              <div className="bg-gray-7 h-16 w-full rounded-lg" />
              <div className="bg-gray-8 h-16 w-full rounded-lg" />
              <div className="bg-gray-9 h-16 w-full rounded-lg" />
            </div>

            <div className="text-secondary mt-2 mb-2">Green</div>
            <div className="grid grid-cols-9 gap-2">
              <div className="bg-green-1 h-16 w-full rounded-lg" />
              <div className="bg-green-2 h-16 w-full rounded-lg" />
              <div className="bg-green-3 h-16 w-full rounded-lg" />
              <div className="bg-green-4 h-16 w-full rounded-lg" />
              <div className="bg-green-5 h-16 w-full rounded-lg" />
            </div>

            <div className="text-secondary mt-2 mb-2">Red</div>
            <div className="grid grid-cols-9 gap-2">
              <div className="bg-red-1 h-16 w-full rounded-lg" />
              <div className="bg-red-2 h-16 w-full rounded-lg" />
              <div className="bg-red-3 h-16 w-full rounded-lg" />
            </div>
          </section>

          <hr />

          <section>
            <h3 className="text-label mb-2 font-semibold">Typography</h3>

            <div className="space-y-2">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <p>Body text</p>
              <p className="text-secondary">Secondary text</p>
              <p className="text-sm">Small text</p>
              <p className="text-xs">Extra small text</p>
              <label className="text-label text-xs font-semibold">Input label</label>
            </div>
          </section>

          <hr />

          <section>
            <h3 className="text-label mb-2 font-semibold">Icons</h3>

            <div className="grid grid-cols-5 gap-4">
              {Object.entries(Icons).map(([name, IconComponent]) => (
                <div
                  key={name}
                  className="border-default flex flex-col items-center justify-center gap-2 rounded-lg border p-4"
                >
                  <IconComponent className="text-label" />
                  <span className="text-secondary text-center text-xs">{name}</span>
                </div>
              ))}
            </div>
          </section>

          <hr />

          <section>
            <h3 className="text-label mb-2 font-semibold">Buttons</h3>

            <p className="text-secondary mb-2">Solid</p>
            <div className="space-y-4">
              {buttonSizes.map((size) => (
                <div className="flex flex-row items-center gap-2" key={size}>
                  <Button variant="solid" size={size} isIconOnly>
                    <IconHomeSm />
                  </Button>
                  <Button variant="solid" size={size}>
                    <IconHomeSm />
                    Home
                  </Button>
                  <Button variant="solid" size={size} isLoading>
                    <IconHomeSm />
                    Home
                  </Button>
                  <Button variant="solid" size={size} isDisabled>
                    <IconHomeSm />
                    Home
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-secondary mt-4 mb-2">Outlined</p>
            <div className="space-y-4">
              {buttonSizes.map((size) => (
                <div className="flex flex-row items-center gap-2" key={size}>
                  <Button variant="outlined" size={size} isIconOnly>
                    <IconHomeSm />
                  </Button>
                  <Button variant="outlined" size={size}>
                    <IconHomeSm />
                    Home
                  </Button>
                  <Button variant="outlined" size={size} isLoading>
                    <IconHomeSm />
                    Home
                  </Button>
                  <Button variant="outlined" size={size} isDisabled>
                    <IconHomeSm />
                    Home
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-secondary mt-4 mb-2">Ghost</p>
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-4">
                <Button variant="ghost">
                  Copy to clipboard
                  <IconCopySm />
                </Button>
                <Button variant="ghost" isDisabled>
                  Copy to clipboard
                  <IconCopySm />
                </Button>
              </div>
            </div>
          </section>

          <hr />

          <section>
            <h3 className="text-label mb-2 font-semibold">Input</h3>

            <div className="mb-4 space-y-4">
              <Input placeholder="Enter text..." />
              <Input placeholder="Enter text..." isDisabled />
              <Input placeholder="Enter text..." value="Something" isError />
              <Input
                placeholder="Enter text..."
                value="Something"
                errorMessage="Something went wrong"
                isError
              />
            </div>
          </section>

          <hr />

          <section>
            <h3 className="text-label mb-2 font-semibold">Text Area</h3>

            <div>
              <TextArea placeholder="Enter multi-line text..." className="min-h-[120px]" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TestUIPage
