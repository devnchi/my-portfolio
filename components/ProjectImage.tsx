import Image from 'next/image'

type Props = {
    img: string
}

function ProjectImage({ img }: Props) {
  return (
    <div className='flex flex-col relative py-16 cursor-pointer mx-auto max-w-7xl p-5'>
        <div className='relative h-96 min-w-[300px]'>
            <Image
                className='rounded-2xl'
                src={img}
                layout='fill'
                objectFit='cover'
            />
        </div>
    </div>
  )
}

export default ProjectImage