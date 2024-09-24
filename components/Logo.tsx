import Link from 'next/link'
import React from 'react'
import { GiRobotGolem } from 'react-icons/gi'

const Logo = ({size="sm"}:{size?:'sm'|'lg'}) => {
    const iconSize=size==='lg'? 'w-9 h-9':'w-6 h-9' 
    const textSize=size==='lg'? 'text-3xl':'text-xl'
  return (
    <Link href='#'  className={`flex items-center gap-2 font-semibold ${textSize}`}>
        <GiRobotGolem className={iconSize}/>
        <span>VIDITOR</span>
    </Link>
  )
}

export default Logo