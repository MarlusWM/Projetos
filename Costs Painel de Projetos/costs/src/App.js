import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NovosProjetos from './components/pages/NovosProjetos'

import Container from './components/pages/layout/Container'


function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/newproject'>Novos Projetos</Link>
      </div>

      <Container customClass='min-height'>
        <Routes>          
          <Route exact path="/" element={<Home/>}/>          
          <Route exact path="/company" element={<Empresa />}/>
          <Route exact path="/contact" element={<Contato />}/>
          <Route exact path="/newproject" element={<NovosProjetos />}/>        
        </Routes>
      </Container>
      
      <p>Footer</p>
    </Router>
  )
}

export default App