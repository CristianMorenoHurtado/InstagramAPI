import React from 'react'
import InstagramLogo from '../assets/Instagram_logo.svg'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={InstagramLogo} alt="" />
        </div>
    )
}

export default Header
