import React from 'react'
import style from './HeaderAdmin.module.css'
import perfil from '../../Assets/perfil.jpg'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import {FiBell} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {IconContext} from 'react-icons'

export default function HeaderAdmin() {
    return (
        <header className={style.ContainerHeaderBG}>

            <section className={style.ContainerHeaderAdm}>

                <div className={style.LogoHeaderAdm}>
                    <a href="/admin" className={style.Logo}><Logo/></a>
                </div>

                <div className={style.ContainerUserAdm}>

                    <ul>
                        <li>
                            <a href="/admin" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 2}}}>
                                    <FiBell/>
                                </IconContext.Provider>
                            </a>
                        </li>

                            
                        <li>
                            <a href="/admin">
                                <div className={style.ContainerLoginAdm}>
                                    <img src={perfil} alt="Minha Figura"/>
                                    <p>Cícero</p>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="/admin" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 1}}}>
                                    <FiLogOut/>
                                </IconContext.Provider>
                            </a>
                        </li>
                    </ul>
                    
                </div>

            </section>

        </header>
    )
}
