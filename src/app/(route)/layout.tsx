import React, { ReactNode } from 'react'

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='text-white'>
        {children}
    </main>
  )
}

export default RootLayout