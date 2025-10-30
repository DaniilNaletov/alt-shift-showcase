import './index.css'

import HomePage from '@/pages/home/HomePage'
import TestUIPage from '@/pages/test-ui/TestUIPage'

import AppLayout from './AppLayout'

const App: React.FC = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  )
}

export default App
