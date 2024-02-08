import React from 'react'

interface Props{
    button_class_name: string;
    button_content: string;
}

function Button({button_class_name, button_content}:Props) {
  return (
    <button type="button" className={`btn ${button_class_name}`}>{button_content}</button>
  )
}

export default Button