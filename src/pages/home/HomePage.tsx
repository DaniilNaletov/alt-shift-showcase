import { Button } from '@altui'
import { IconPlusSm } from '@altui/icons'

import GoalBanner from '@/modules/coverLetter/components/GoalBanner/GoalBanner'

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

      <GoalBanner className="mt-12" />
    </div>
  )
}

export default HomePage
