
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Hookkk from './Hookkk'
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/about" element={<h1>Hi this is about page</h1>}/>
  <Route  path="/contact" element={<h1>Hi this is contact page</h1>}/>
  <Route  path="/hookkk" element={<Hookkk/>}/>
 </Routes>
 </BrowserRouter>
  )
}

export default App

