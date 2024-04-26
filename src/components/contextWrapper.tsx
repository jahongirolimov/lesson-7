import React, { useContext } from 'react'
import Counter from './counter'
import { ContextCounter } from './mycontext'

export default function contextWrapper() {
  const {counters, setCounters} = useContext(ContextCounter)
  return (
    <>
        <div className='w-full flex justify-center gap-[30px] mt-[100px]'>
          <button className='py-[8px] px-[16px] bg-[#16163d] text-white font-bold active:bg-white rounded-xl' onClick={() => setCounters({A: counters.A - 1, B:counters.B - 1, C:counters.C - 1, D: counters.D - 1})}>-</button>
          <button className='py-[8px] px-[16px] bg-[#16163d] text-white font-bold active:bg-white rounded-xl' onClick={() => setCounters({A: counters.A + 1, B:counters.B + 1, C:counters.C + 1, D: counters.D + 1})}>+</button>
        </div>

      
        <div className='flex justify-center gap-[200px] mt-[300px]'>
          <div>
              <Counter title={"A"}/>
              <Counter title={"B"}/>
          </div>
          <div>
              <Counter title={"C"}/>  
              <Counter title={"D"}/>
          </div>
        </div>
    </>
  )
}
