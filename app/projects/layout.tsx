import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Gasal | Projects',
    description: 'Here Is all my showcased projects..',
  }

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='dark:bg-dark'>
        {children}
    </div>
  )
}

export default layout