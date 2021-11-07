import React from 'react'
import Button from './Button'
const Header = ({title, onAddBtn, showAdd}) => {
    return (
        <div className='header'>
            <h1>ReactJS {title}</h1>
            <Button color={showAdd ? "red":"green"} text={showAdd ? "Close":"Add"} onAddBtn={onAddBtn}/>
        </div>
    )
}
//
export default Header
