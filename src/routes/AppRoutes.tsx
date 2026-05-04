
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/skills' element ={<Skills />}/>
        <Route path= '/contact' element ={<Contact />}/>
    </Routes>
  )
}

export default AppRoutes
