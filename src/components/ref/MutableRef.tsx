import { useRef, useState, useEffect } from 'react'

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef < number | null > (null)

  const stopTimer = () => {
    if(interValRef.current)window.clearInterval(interValRef.current)

  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])
  return (
    <div>
      <h1 className='bg-pink-500 text-white p-6 m-9 text-xl' >
      HookTimer -{timer}-
      </h1>
    
      <button className='bg-green-500 rounded-xl text-white p-6 m-9' onClick={() => stopTimer()}>Stop timer</button>
    </div>
  )
}
