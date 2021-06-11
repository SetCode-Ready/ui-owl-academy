import React from 'react'
import api from '../../config/api';
import HeaderAdmin from './HeaderAdmin'
import style from './searchClass.module.css'
import {Link} from 'react-router-dom'
import loadingIMG from '../../Assets/loading.svg'



export default function SearchTeacher() {

    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')

    React.useEffect( ()=> {
        async function SearchAll(){

            try {
                setLoading(true)
                const response = await api.get('/school-class')
                setContent(response.data.reverse())
                console.log(response)
            } catch (error) {
                setContent(['Nenhuma turma encontrada, porfavor cadastre uma!'])
            } finally{
                setLoading(false)
            }
        }

        SearchAll()

    }, [])

    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Turmas</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o codigo da turma"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {content && content.map(item => {
                            return(
                                <Link to={`/search-class/${item.id}`} key={item.created_at} className={style.Class}>
                                    <p>{item.class_code}</p>
                                    <p>{item.status}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
