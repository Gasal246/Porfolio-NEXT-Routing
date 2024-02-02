import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Gasal | Articles',
    description: 'About Page of my portfolio',
  }

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout