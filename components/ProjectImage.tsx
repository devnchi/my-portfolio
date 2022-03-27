import Image from 'next/image'

type Props = {
    img: string
}

function ProjectImage({ img }: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <div className='m-28 p-28'>
            <Image
                className=''
                src={img}
                layout='fill'
                objectFit='contain'
            />
        </div>
    </div>
  )
}

export default ProjectImage