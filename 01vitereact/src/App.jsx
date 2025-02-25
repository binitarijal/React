
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route  path="/" element={<Home/>}/>
  <Route  path="/about" element={<h1>Hi this is about page</h1>}/>
  <Route  path="/contact" element={<h1>Hi this is contact page</h1>}/>
 </Routes>
 </BrowserRouter>
  )
}

export default App

