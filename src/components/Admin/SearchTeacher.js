import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import loadingIMG from '../../Assets/loading.svg'
import { Link } from 'react-router-dom';
import style from './searchStudent.module.css'
import api from '../../config/api'
import { toast } from 'react-toastify';

export default function SearchTeacher() {
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [search, setSearch] = React.useState('')
    
    async function requestTeacher(){
        try {
            const response = await api.get('/teacher')

            const {data, status} = response
            console.log(data)
            if(status === 200) setContent(data)
        } catch (error) {
            toast.error("Serviço temporariamente indisponivel")
            setContent(null)
        } finally {
            setLoading(false)
        }  
    }

    React.useEffect(() => {
        
        requestTeacher()

    }, [])

    return (
        <>
            <HeaderAdmin/>
            <section className={style.ContainerMain} >
                <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Professor</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o codigo do professor"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {content && content.map(item => {
                            return(
                                <Link to={`/search-teacher/${item.id}`} key={item.id} className={style.Class}>
                                    <p>{item.name}</p>
                                    <p>{item.cpf}</p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
