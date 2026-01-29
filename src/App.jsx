import AddData from './components/AddData'
import Login from './components/Login'
import Register from './components/Register'



import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
 return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/adddata' element={<AddData/>}/>
  </Routes>
  </BrowserRouter>
  </>
 )
}
export default App