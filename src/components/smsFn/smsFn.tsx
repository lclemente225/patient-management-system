import React from 'react'

const SmsFn = ({phoneNumber}) => {

  



  return (
    <>
    <form onSubmit={e => e.preventDefault()} className="w-7/12 flex flex-col items-center">
        <div className='h-60 w-full border-2'>
        {phoneNumber}
        </div>
        <input type="text" placeholder="Send Message to Patient" className='my-2 bg-neutral-content w-full z-20'/>
        <button className="btn btn-sm w-6/12 mx-5" >Send</button>
    </form>
    </>
  )
}

export default SmsFn
