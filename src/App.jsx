import {
  Hero,
  Navbar,
  Tech,
  About,
  Experience,
  Works,
  Feedbacks,
  Contact,
} from './components'

function App() {
  return (
    <main className="relative z-0 bg-primary">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
      </div>
    </main>
  )
}

export default App
