import { Button } from '@altui'
import { IconPlusSm } from '@altui/icons'

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between">
        <h1>Applications</h1>
        <Button variant="solid">
          <IconPlusSm />
          Create New
        </Button>
      </div>
      <hr />
    </div>
  )
}

export default HomePage
