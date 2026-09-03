import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CloudMarquee from './components/CloudMarquee'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'
import WorkExperience from './components/Internships'
import Leadership from './components/Leadership'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <CloudMarquee />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <ContentCreator />
      <CloudMarquee reverse={true} />
      <WorkExperience />
      <Leadership />
      <Certificates />
      <SoftSkills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
