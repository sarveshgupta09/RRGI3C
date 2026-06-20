import React from 'react'
import Student from './Student'
import Parentcomponnet from './Parentcomponnet'
import Teachers from './Teachers'
import Rrgi from './Rrgi'
import UseState from './Hooks/UseState'
import Password from './Hooks/Password'
import Forms from './Hooks/Forms'
import UseEffect from './Hooks/UseEffect'
import Useref from './Hooks/Useref'
import Usereftimer from './Hooks/Usereftimer'
import Prev from './Hooks/Prev'
import Home from './Home'
import Memo from './Hooks/Memo'
import Portfolio from './Hooks/Portfolio'
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Callback from './Hooks/Callback'

const App = () => {
 
  return (
    <div>
      {/* <button onClick={Buttonclick}>Click</button> */}
      {/* <Student/> */}
      {/* <Parentcomponnet/> */}
      {/* <Teachers/> */}
{/* <UseState/> */}
{/* <Password/> */}
{/* <UseEffect/> */}
{/* <Forms/> */}
{/* <Useref/> */}
<BrowserRouter>
<Routes>
  <Route path='/prev' element={<Prev/>}/>
  <Route path='/' element={<Home/>} />
  <Route path='/reftimer' element={<Usereftimer/>}/>
  <Route path='/signupform' element={<Forms/>}/>
    <Route path='/memo' element={<Memo/>}/>
     <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/callback' element={<Callback/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App
