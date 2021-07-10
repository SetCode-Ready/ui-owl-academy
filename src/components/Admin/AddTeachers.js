import React, {useRef} from 'react'
import style from './addStudant.module.css'
import loadingIMG from '../../Assets/loading.svg'
import { toast } from 'react-toastify'
import api from '../../config/api'
import { Modal } from '../ModalContext'
import {useParams} from 'react-router-dom'

export default function AddStudant() {
    const [search, setSearch] = React.useState('')
    const [content, setContent] = React.useState();
    const [loading, setLoading] = React.useState(true)
    const [teacherIds, setTeacherIds] = React.useState([])

    const params = useParams()

    const checkbox = useRef()

    const {ChangeState} = Modal()

    const {id} = params

    async function populateForm(){
        try {
            const response = await api.get('/teacher')
            console.log(response)
            if(response.status === 200) setContent(response.data)
        } catch (error) {
            toast.error("Serviço temporariamente indisponivel")
            setContent(null)
        } finally{
            setLoading(false)
        }
        
    }

    React.useEffect(() => {
        
        populateForm()
        console.log(id)


    }, [id])

    React.useEffect(() => {
        console.log(teacherIds)
    },[teacherIds])

    let contentFilter = React.useMemo(() => {
        if(content){
            const busca = search.toLowerCase()
            return content.filter( data => data.name.toLowerCase().includes(busca))
        }
    }, [content, search])

    function handleAddStudant(e){
        if(e.target.checked){
            setTeacherIds([...teacherIds, e.target.value])
        } else{
            const array = teacherIds
            let arrayfilter = array.filter((item) => item !== e.target.value)
            setTeacherIds(arrayfilter)
        }
    }

    async function handleSendStudent(){
        try {
            const response = await api.post(`/teacher-school-class`,{
                teacherIds,
                school_class_id: id
            })
            
            if(response.status === 200){
                toast.success('Professores adicionados a turma!')
                setTeacherIds([])

                const inputArray  = [...document.getElementsByTagName('input')];

                inputArray.forEach(item => {
                    if(item.type === "checkbox"){
                        item.checked = false
                    }
                })
            }
        } catch (error) {
            toast.error(error.message)            
        }

        
    }

    return (
        <div className={style.Main}>
            <div className={style.ContainerContent}>
                    <div className={style.ContentHeader} >
                        <h2>Buscar Alunos</h2>
                        <input value={search} onChange={({target}) => setSearch(target.value)}  type='text' placeholder="Digite o nome do professor"/>
                    </div>
                    <div className={loading === true ? style.ContentLoading : style.ContentBody}>
                        <img src={loadingIMG} alt="loading" />
                        {contentFilter && contentFilter.reverse().map(item => {
                            return(
                                <div to={`/search-student/${item.id}`} key={item.id} className={style.Class}>
                                    <input onChange={handleAddStudant} value={item.id} type="checkbox" ref={checkbox} />
                                    <div className={style.ContentDisplayInfo}>
                                        <span>{item.name}</span>
                                        <p>{item.cpf}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            <div className={style.ContainerButton}>
                <button className={style.Send} onClick={handleSendStudent} >Enviar</button>
                <button className={style.Cancel} onClick={() => ChangeState(0)} >Cancelar</button>
            </div>
        </div>
    )
}
