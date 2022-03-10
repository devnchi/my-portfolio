import { useState } from 'react';
import Typewriter from 'typewriter-effect';

type Props = {}

function Hero({}: Props) {
  const [staticText] = useState({
      titleOne: 'Hello',
      titleTwo: "My name is Chi Igbokwe.",
  })

  return (
    <div className='flex items-center justify-evenly max-w-8xl min-h-screen mx-auto'>
        <div className='font-spaceMono'>
            <h2 className='text-5xl'>
                <div>{staticText.titleOne},</div>
                <div>{staticText.titleTwo}</div>
            </h2>
        </div>
        <div className='text-5xl font-comforterBrush'>
            <h3>I'm a... </h3>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        'Software Engineer',
                        'Designer',
                        'Marketing Specialist',
                        'Content Creator',
                        'Tech Enthusiast'
                    ]
                }}
            />
        </div>
    </div>
  )
}

export default Hero