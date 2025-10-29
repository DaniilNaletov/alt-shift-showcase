import './index.css'

// use env var from VITE
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
console.log('API Base URL:', apiBaseUrl)

const App: React.FC = () => {
  return <div className="text-red-500">App Component</div>
}

export default App
