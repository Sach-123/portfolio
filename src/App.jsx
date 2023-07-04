import {Navbar, Intro, Projects, Skills, About, Contact, Footer} from "./components";
import './App.css'

const App = () =>  (
    <div className="bg-primary_background w-full overflow-hidden font-Fira_code">
      <Navbar />
      <Intro/>
      <Projects/>
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  )


export default App
