import React from 'react'
import Button from './Button'
import { GoFlame } from 'react-icons/go'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative flex w-full flex-col md:flex-row items-center justify-between p-16 pt-20 md:pt-40 gap-20'>
        <div className='absolute gradient-02 left-1/2 w-1/2 inset-0'/>
        <div className='flex flex-col gap-2 z-10 md:max-w-80 lg:max-w-96'>
            <p className='text-slogan'>Effortless Video creation</p>
            <h1 className='h1'>Incredibly Simple & Fast</h1>
            <p className='p mb-4'>Experience a user-friendly, fast, and efficient video editing tool that&apos;s also surprisingly powerful, enabling you to create stunning quickly, without compromising on quality.</p>
            <Button text='Try it now' link='#download' icon={GoFlame} />
        </div>
        <div className='w-80 lg:w-96 z-10'>
            <Image src='/hero.png' width={350} height={500} alt='Hero robotImage' />
        </div>
    </div>
  )
}

export default Hero