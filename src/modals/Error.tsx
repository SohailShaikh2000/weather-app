import errorLogo from '../../assets/images/icon-error.svg'
import retryLogo from '../../assets/images/icon-retry.svg'
import { useState } from 'react'
const Error = () => {

  const [retry, setRetry] = useState<boolean>(false)

  const handleRetry = () => {
  setRetry(true)
  
  setTimeout(() => {
    setRetry(false)
  }, 1000)
}

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full font-custom text-[hsl(250,6%,84%)]!">
        <img src={errorLogo} alt="" className='h-10 w-10 ' />
        <h1 className='text-4xl font-bold pb-3'>Something Went Wrong</h1>
        <p className='text-[16px] text-center'>We couldn't connect to the server (API error). Please try <br/> again in few moments</p>
        <button className='flex gap-1.5 bg-[hsl(243,23%,30%)]! text-text-[hsl(250,6%,84%)]! px-3 py-2 rounded-sm cursor-pointer' onClick={handleRetry}>
          <img src={retryLogo} alt="" className={`${retry === true ? "animate-spin" : "animate-none"}`} />
          Retry
        </button>
    </div>
  )
}

export default Error