import React from 'react'
import style from './HeaderAdmin.module.css'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import {FiBell} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {IconContext} from 'react-icons'

export default function HeaderAdmin() {
    return (
        <header className={style.ContainerHeader}>
            <Logo/>
            <div className={style.ContainerUser}>
                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 2}}}>
                    <FiBell/>
                </IconContext.Provider>
                <div className={style.ContainerLogin} > 
                    <div className={style.UserPhoto}/>
                    <p>Lula</p>
                </div>
                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 1}}}>
                    <FiLogOut/>
                </IconContext.Provider>
            </div>
        </header>
    )
}
