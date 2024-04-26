import { useContext, useState } from 'react'
import MyContext from './components/mycontext'
import { ContextCounter } from './components/mycontext' 
import ContextWrapper from './components/contextWrapper'

function App() {
  return (
    <>
       <MyContext>
         <div className='flex justify-center gap-[300px]'>
            <div>
                <ContextWrapper/>
            </div>            
         </div>
       </MyContext>
    </>
  )
}

export default App
