import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='flex items-center justify-center  '><div className='w-full max-w-full p-2'>{children}</div></div>
  )
}

export default AuthLayout