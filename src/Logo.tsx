import React from 'react'
import signature from './assets/general/signature.png'

const Logo = () => {
  return (
    <div className='flex text-white p-4 items-center justify-center' >
        <img alt='signature' src={signature} className='w-48 h-12 '/>
    </div>
  )
}

export default Logo