import React from 'react'

const Button = ({color,text, onAddBtn}) => {
    return <button className='btn' style={{backgroundColor:color}} onClick={onAddBtn}>{text}</button>
}

export default Button
