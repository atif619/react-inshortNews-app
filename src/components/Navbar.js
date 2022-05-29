import React from 'react'
import newsLogo from '../image/news-report.png'

const Navbar = ({ setMenu,menu }) => {
    return (
        <>
            <nav>

                {
                    menu ? <ion-icon name="close-outline" onClick={() => setMenu(false)} ></ion-icon> : <ion-icon name="menu-outline" onClick={() => setMenu(true)} ></ion-icon>
                   
                }
                <img src={newsLogo} alt='logo' />
            </nav>
        </>
    ) 
}

export default Navbar
 