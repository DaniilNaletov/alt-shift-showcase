import { Button } from '@altui'
import { IconPlusSm } from '@altui/icons'
import { Link } from 'react-router-dom'

import CoverLettersWidget from '@/modules/coverLetter/components/CoverLettersWidget/CoverLettersWidget'
import GoalBanner from '@/modules/coverLetter/components/GoalBanner/GoalBanner'
import IfBannerNeeded from '@/modules/coverLetter/components/IfBannerNeeded/IfBannerNeeded'

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between">
        <h1>Applications</h1>
        <Button variant="solid" asChild>
          <Link to="/create">
            <IconPlusSm />
            Create New
          </Link>
        </Button>
      </div>
      <hr />

      <CoverLettersWidget className="mt-6" />

      <IfBannerNeeded>
        <GoalBanner className="mt-12" />
      </IfBannerNeeded>
    </div>
  )
}

export default HomePage
