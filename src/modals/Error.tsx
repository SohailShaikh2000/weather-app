import errorLogo from '../../assets/images/icon-error.svg'
const Error = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
        <img src={errorLogo} alt="" className='h-10 w-10 ' />
        <h1>Something Went Wrong</h1>
    </div>
  )
}

export default Error