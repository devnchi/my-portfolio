import Image from 'next/image'

type Props = {
    img: string,
    title: string,
    description: string,
}

function WordCard({ img, title, description }: Props) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out p-5 font-spaceMono hover:bg-purple-400 hover:rounded-xl items-center'>
        <div className='relative h-80 w-full'>
            <Image
                className='rounded-xl items-center justify-center'
                src={img}
                layout='fill'
                objectFit='cover'
            />
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
        <h3 className='text-sm'>{description}</h3>
    </div>
  )
}

export default WordCard