import React from 'react'

type Props = {
    pageTitle: string,
    projectDescription: string,
    projectTech: string,
}

function PageHeader({pageTitle, projectDescription, projectTech}: Props) {
  return (
    <div className='items-center justify-center p-20 text-center mx-auto md:my-20 md:p-40'>
        <div>
            <h3 className='text-9xl font-comforterBrush'>{pageTitle}</h3>
        </div>
        <div className='pt-4 p-4'>
          <div>
            <p className='text-xl font-spaceMono text-center'>{projectDescription}</p>
          </div>
          <div className='pt-4 text-center justify-center'>
            <span className='text-3xl font-comforterBrush font-bold text-purple-600'>{projectTech}</span>
          </div>
        </div>

    </div>
  )
}

export default PageHeader