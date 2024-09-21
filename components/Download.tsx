import React from 'react'
import Logo from './Logo'
import { FaApple, FaGlobe, FaGooglePlay, FaWindows } from 'react-icons/fa'
import Icon from './Icon'
import Image from 'next/image'

const Download = () => {
  return (
    <div className='md:p-8' id='download'>
        <div className='relative flex flex-col md:flex-row items-center mb-96 md:mb-0 md:h-[550px]'>
            <div className='w-72 flex flex-col gap-8 mb-36 md:mb-0'>
            <Logo size='lg'/>
            <p>Try it now free on IOS,Android,PC,and web. Choose your platform and get started today </p>
            <div className='flex flex-row justify-between'>
            <Icon icon={FaApple} link='#'/>
            <Icon icon={FaGooglePlay} link='#'/>
            <Icon icon={FaWindows} link='#'/>
            <Icon icon={FaGlobe} link='#'/>
            </div>
            </div>
            <div className='absolute  left-4 top-72 md:top-auto md:left-1/2 px-auto w-[620px] md:w-[700px]  rounded-3xl overflow-hidden border-2 border-black ring-1 ring-slate-950 ring-offset-[24px] ring-offset-slate-950'>
                <Image src="/download.png" alt='screenshot' width={700} height={700}/>
            </div>
        </div>
            <div className='flex justify-around items-center flex-col md:flex-row px-16 mt-12 gap-4'>
                <Image className='' src='/brands/youtube.png' alt='youtube' width={150} height={40}/>
                <Image className='' src='/brands/google.png' alt='google' width={150} height={40}/>
                <Image className='' src='/brands/openai.png' alt='openai' width={150} height={40}/>
                <Image className='' src='/brands/adobe.png' alt='adobe' width={150} height={40}/>
            </div>
    </div>
  )
}

export default Download