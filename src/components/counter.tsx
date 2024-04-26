import { useContext, useState} from 'react'
import { ContextCounter } from './mycontext'

export default function hello(props:any) {
  const {counters, setCounters} = useContext(ContextCounter)
  const [count, setCount] = useState(0)
  
  return (
    <div className='w-[300px]'>
       <h1 className='font-bold'>{props.title} component</h1>
       <p className='flex justify-center font-medium'>Count: {count + counters[props.title]}</p>
       <div className='flex gap-[20px] justify-end'>
         <button className='py-[8px] px-[16px] bg-[#16163d] text-white font-bold active:bg-white rounded-xl' onClick={() =>setCount(count - 1)}>-</button>
         <button className='py-[8px] px-[16px] bg-[#16163d] text-white font-bold active:bg-white rounded-xl' onClick={() => setCount(count + 1)}>+</button>
       </div>
    </div>
  )
}
