'use client'

import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const LoadingPage = ({loading}) => {
    const override = {
        display: 'block',
        margin: '6.25rem auto'
    }

  return (
    <ClipLoader 
        color='#3b82f6'
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
    />
  )
}

export default LoadingPage