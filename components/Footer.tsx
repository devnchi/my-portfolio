

type Props = {}

function Footer({}: Props) {
  return (
    <div className='p-8 m-5 mt-11 mb-8 font-spaceMono'>
        <div className='flex flex-col items-center justify-center p-2'>
            <h2 className="text-4xl lg:text-5xl">Let's talk.</h2>
        </div>
        <div className='flex items-center justify-center mx-auto p-3 mt-0 cursor-pointer space-x-2 text-sm lg:space-x-5 lg:text-lg lg:p-5'>
            <span>LinkedIn</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Dribble</span>
            <span>Email</span>
            <span>Resume</span>
        </div>
    </div>
  )
}

export default Footer