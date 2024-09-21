import React from 'react'
import { IconType } from 'react-icons'
import Button from './Button'
import Icon from './Icon'
interface FeatureCardProps {
    icon:IconType
    slogan:string
    heading:string
    text:string
    buttonIcon:IconType
    buttonText:string
}
const FeatureCard = ({icon:featureIcon,slogan,heading,text,buttonIcon:buttonIcon,buttonText}:FeatureCardProps) => {
  return (
    <div>
        <div>
            <div className='hidden md:block w-[2px] h-16 ml-24 bg-blue-900'/>
            <div className='flex md:ml-16'>
                <div className='w-12 h-[2px] mt-8 md:hidden bg-blue-900'/>
                <Icon icon={featureIcon} size="lg"/>
            </div>
        </div>
        <div className='flex flex-col gap-2 p-8 pt-6 md:px-16 md:py-10 relative '>
            <p className='text-slogan'>{slogan}</p>
            <h2 className='h2'>{heading}</h2>
            <p className='p mb-8'>{text}</p>
            <Button text={buttonText} icon={buttonIcon} link='#' />
        </div>
    </div>
  )
}

export default FeatureCard