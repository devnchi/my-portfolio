import Image from 'next/image'
import Link from 'next/link'

type Props = {
    img: string,
    title: string,
    description: string,
    buttonText: string,
    buttonLink: string,
}

function HighlightCard({ img, title, description, buttonText, buttonLink }: Props) {
  return (
    <div className='flex flex-col relative py-16 cursor-pointer mx-auto max-w-7xl p-5 hover:scale-105 transform transition duration-300 ease-out hover:bg-black hover:text-white hover:rounded-xl'>
        <div className='relative h-96 w-full mb-8'>
            <Image
                className='rounded-2xl'
                src={img}
                layout='fill'
                objectFit='cover'
            />
        </div>
        <div className='font-spaceMono'>
            <h3 className='text-4xl mb-3'>{title}</h3>
            <p>{description}</p>
            <Link href={buttonLink}>
                <button className='text-lg text-white bg-black px-4 py-2 rounded-lg mt-5 font-comforterBrush hover:bg-purple-400'>
                    {buttonText}
                </button>       
            </Link>
        </div>
    </div>
  )
}

export default HighlightCard