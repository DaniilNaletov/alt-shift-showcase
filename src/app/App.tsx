import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'

import { QueryService } from '@/services/query'

import Root from './Root'

QueryService.init()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={QueryService.getClient()}>
      <Root />
    </QueryClientProvider>
  )
}

export default App
