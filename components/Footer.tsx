

type Props = {}

function Footer({}: Props) {
  return (
    <div className='p-8 m-5 mt-11 mb-8 font-spaceMono'>
        <div className='flex flex-col items-center justify-center p-2'>
            <h2 className="text-4xl lg:text-5xl">Let's talk.</h2>
        </div>
        <div className='flex items-center justify-center mx-auto p-3 mt-0 cursor-pointer space-x-2 text-sm lg:space-x-5 lg:text-lg lg:p-5'>
            <a href="https://www.linkedin.com/in/chi-igbokwe/" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">LinkedIn</span></a>
            <a href="https://twitter.com/devnch11" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">Twitter</span></a>
            <a href="" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">Dribble</span></a>
            <a href="https://github.com/devnchi" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">Github</span></a>
            <a href="mailto:chiigbokwedev@gmail.com" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">Email</span></a>
            <a href="https://www.dropbox.com/s/yj8lcefduddzjgh/Chi%20Igbokwe%20CV.pdf?dl=0" target='_blank'><span className="hover:text-purple-600 hover:animate-pulse">Resume</span></a>
        </div>
    </div>
  )
}

export default Footer