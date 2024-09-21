import React from 'react'
import Icon from './Icon'

const ReviewCard = ({name,imgSrc,company,review}:{name:string,imgSrc:string,company:string,review:string}) => {
  return (
    <div className='w-56 md:w-96 flex flex-col gap-8'>
        <p className='p'>{review}</p>
        <div className='flex  items-center gap-4'>
            <Icon imgSrc={imgSrc}/>
            <div>
                <p className='mb-1 text-sm text-cyan-500 font-semibold'>{name}</p>
                <p className='p-xs'></p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard