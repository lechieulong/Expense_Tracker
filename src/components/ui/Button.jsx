import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <button className="px-4 md:py-2 py-1 bg-white rounded-lg md:text-[14px] text-[12px] text-black">{title}</button>
    </div>
  )
}

export default Button