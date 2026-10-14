import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Care from './components/Care'
import Infrastructure from './components/Infrastructure'
import Rooms from './components/Rooms'
import Nature from './components/Nature'
import Gallery from './components/Gallery'
import Booking from './components/Booking'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Care />
        <Infrastructure />
        <Rooms />
        <Nature />
        <Gallery />
        <Booking />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
