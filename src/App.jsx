import { Hero, Navbar, Tech } from './components'

function App() {
  return (
    <main className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <Tech />
    </main>
  )
}

export default App
