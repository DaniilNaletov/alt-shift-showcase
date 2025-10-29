import './index.css'

// use env var from VITE
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
console.log('API Base URL:', apiBaseUrl)

const App: React.FC = () => {
  return (
    <div className="">
      App Component
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <div>
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-1))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-2))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-3))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-4))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-5))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-6))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-7))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-gray-8))]" />
      </div>
      <div>
        <div className="h-10 w-10 bg-[hsl(var(--color-green-1))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-green-2))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-green-3))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-green-4))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-green-5))]" />
      </div>
      <div>
        <div className="h-10 w-10 bg-[hsl(var(--color-red-1))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-red-2))]" />
        <div className="h-10 w-10 bg-[hsl(var(--color-red-3))]" />
      </div>
    </div>
  )
}

export default App
