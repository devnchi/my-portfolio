import { useState } from 'react';
import Typewriter from 'typewriter-effect';

type Props = {}

function Hero({}: Props) {
  const [staticText] = useState({
      titleOne: 'Hello',
      titleTwo: "My name is Chi Igbokwe.",
  })

  return (
    <div className='container items-center text-center justify-center min-h-screen p-20 mt-40 lg:flex lg:text-justify lg:justify-evenly lg:max-w-8xl lg:mx-auto lg:mt-0'>
        <div className='font-spaceMono mb-20 lg:mb-0'>
            <h2 className='text-5xl lg:text-4xl xl:text-5xl'>
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