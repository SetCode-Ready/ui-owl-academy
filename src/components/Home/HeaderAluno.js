import React from 'react'
import style from './headerAluno.module.css'
import perfil from '../../Assets/perfil.jpg'
import {ReactComponent as Logo} from '../../Assets/Owl-HEAD.svg'
import {FiBell} from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi'
import {IconContext} from 'react-icons'
import {Link} from 'react-router-dom'
import { User } from '../UserContext'

export default function HeaderAdmin() {

    const {user, userLogout} = User()

    return (
        <header className={style.ContainerHeaderBG}>

            <section className={style.ContainerHeaderAdm}>

                <Link to="/student/dashboard" className={style.LogoHeaderAdm}>
                    <Logo/>
                </Link>

                <div className={style.ContainerUserAdm}>

                    <ul>
                        <li>
                            <Link to="/admin" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 2}}}>
                                    <FiBell/>
                                </IconContext.Provider>
                            </Link>
                        </li>

                            
                        <li>
                            <Link to="/admin">
                                <div className={style.ContainerLoginAdm}>
                                    <img src={perfil} alt="Minha Figura"/>
                                    <p>{user && user.name}</p>
                                </div>
                            </Link>
                        </li>

                        <li>
                            <Link onClick={userLogout} to="/" className={style.iconAdm}>
                                <IconContext.Provider value={{color: 'white', size: '1.5rem', style:{flexGrow: 1}}}>
                                    <FiLogOut/>
                                </IconContext.Provider>
                            </Link>
                        </li>
                    </ul>
                    
                </div>

            </section>

        </header>
    )
}
