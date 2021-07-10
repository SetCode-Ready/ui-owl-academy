import React from 'react'
import style from './addStudant.module.css'
import loadingIMG from '../../Assets/loading.svg'
import { toast } from 'react-toastify'
import api from '../../config/api'
import { Modal } from '../ModalContext'
import {useParams} from 'react-router-dom'

export default function ListStudentClass() {
    const [search, setSearch] = React.useState('')
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)

    const params = useParams()

    const {ChangeState} = Modal()

    const {id} = params

    const populateForm = React.useCallback(async () => {
      try {
        const response = await api.get(`/school-class/${id}/teachers`);
        console.log(response);
        if (response.status === 200) setContent(response.data.relatedTeachers);
      } catch (error) {
        toast.error("Serviço temporariamente indisponivel");
        setContent(null);
      } finally {
        setLoading(false);
      }
    }, [id]);

    React.useEffect(() => {
        
        populateForm()

    }, [populateForm])


    let contentFilter = React.useMemo(() => {
        if(content){
            const busca = search.toLowerCase()
            return content.filter( data => data.name.toLowerCase().includes(busca))
        }
    }, [content, search])

    return (
        <div className={style.Main}>
            <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Professores</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o nome do Professor"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {contentFilter && contentFilter.reverse().map(item => {
                            return(
                                <div to={`/search-student/${item.id}`} key={item.id} className={style.Class}>
                                    <div className={style.ContentDisplayInfo}>
                                        <span>{item.name}</span>
                                        <p>{item.school_enrollment}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            <div className={style.ContainerButtonSingle}>
                <button className={style.Cancel} onClick={() => ChangeState(0)} >Fechar</button>
            </div>
        </div>
    )            
}
