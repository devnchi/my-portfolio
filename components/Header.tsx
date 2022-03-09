import { useState } from 'react';
import Typewriter from 'typewriter-effect';

type Props = {}

function Header({}: Props) {
  const [staticText] = useState({
      titleOne: 'Hello',
      titleTwo: "I'm Chi Igbokwe",
  })

  return (
    <div className='flex flex-row items-center justify-around max-w-8xl mx-auto'>
        <div>
            <h2>
                <div>{staticText.titleOne},</div>
                <div>{staticText.titleTwo}</div>
            </h2>
        </div>
        <div>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                        'Software Engineer',
                        'UI/UX Designer',
                        'Marketing Specialist',
                        'Content Creator',
                        'Mentor',
                        'Tech Enthusiast'
                    ]
                }}
            />
        </div>
    </div>
  )
}

export default Header