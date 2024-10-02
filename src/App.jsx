import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutUser from './LayoutUser'
import LayoutAdmin from './LayoutAdmin'

const App = () => {
  return (
      
        <div className='text-center'>
          
          <h1>App</h1>
                  <Routes >
                    <Route path = "/*" element = {<LayoutUser />} />
                    <Route path = '/admin/*' element = {<LayoutAdmin />} />
                  </Routes>
        </div>

)
}

export default App