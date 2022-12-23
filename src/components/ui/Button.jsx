import React from 'react'

const Button = ({title, bgColor, textColor, pd, customFunc}) => {
  return (
    <div>
        <button onClick={customFunc}  className={`${pd} inline-block py-1 ${bgColor} rounded-lg md:text-[14px] text-[12px]   ${textColor} cursor-pointer`}>{title}</button>
    </div>
  )
}

export default Button