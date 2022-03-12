import React from 'react'

type Props = {
    pageTitle: string
}

function PageHeader({pageTitle}: Props) {
  return (
    <div className='flex items-center justify-center font-comforterBrush p-40 my-20'>
        <div>
            <h3 className='text-9xl text-center'>{pageTitle}</h3>
        </div>
    </div>
  )
}

export default PageHeader