import Image from 'next/image'

type Props = {
    img: string,
    title: string,
    description: string,
    buttonText: string,
}

function HighlightCard({ img, title, description, buttonText }: Props) {
  return (
    <div className='flex flex-col py-16 cursor-pointer mx-auto max-w-7xl'>
        <div className='relative h-96 min-w-[300px]'>
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

            <button className='text-lg text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 font-comforterBrush'>
                {buttonText}
            </button>
        </div>
    </div>
  )
}

export default HighlightCard