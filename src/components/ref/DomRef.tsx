import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  return (
    <div>
      <input className='bg-blue-300 m-9 outline-none p-9' type='text' ref={inputRef} placeholder='enter value....' />
    </div>
  )
}
