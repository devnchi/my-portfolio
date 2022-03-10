

type Props = {}

function Footer({}: Props) {
  return (
    <div className='p-3 m-5 mt-8 mb-8 font-spaceMono'>
        <div className='flex flex-col items-center justify-center p-2'>
            <h2 className="text-5xl">Let's talk.</h2>
        </div>
        <div className='flex items-center justify-center space-x-8 mx-auto max-w-2xl p-5 mt-0'>
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