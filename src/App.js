import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
// import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Menu from './components/menu/Menu'
import { useState } from 'react'




function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="Sections">
       <Intro/>
       <Portfolio/>
       {/* <Projects/> */}
       <Contact/>

       
     </div>
    </div>
  
  );
}

export default App;
