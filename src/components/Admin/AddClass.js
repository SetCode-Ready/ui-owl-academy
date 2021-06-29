/* eslint-disable no-template-curly-in-string */
import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addClass.module.css'
import api from '../../config/api'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function AddClass() {

    
    
    const {id} = useParams()
    const history = useHistory()

    const [cursos, setCursos] = React.useState()
    const [course, setCurso] = React.useState('')
    const [period, setPeriod] = React.useState()
    const [number_students, setStudents] = React.useState(0)
    const [initial_date, setInitial] = React.useState()
    const [final_date, setFinal] = React.useState()
    const [loading, setLoading] = React.useState(false)
    
    const populateClassCategorie = async () => {
        const response = await api.get('/course')
        
        setCursos(response.data);
        setCurso(response.data[0].id);
    }

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    
    const populateForm = React.useCallback(async (id) => {
        let response
        try{
            response = await api.get(`/school-class/${id}`);
            const { data } = response;
            console.log(data)
            setPeriod(data.schoolClass.period)
            setCurso(data.course.id)
            setStudents(data.schoolClass.number_students)
            setInitial(formatDate(data.schoolClass.initial_date))
            setFinal(formatDate(data.schoolClass.final_date))

        } catch {
            history.push('/add-class/')
        }
    },[history])


    React.useEffect(() => {
        
        populateClassCategorie();

        if(id){
            populateForm(id)
        }


    }, [history, id, populateForm]);

    const handleUpdate = async(e) => {
        e.preventDefault()

        let response;
        try{

            response = await api.put(`/school-class/${id}`, {
                period,
                course,
                number_students,
                final_date,
                initial_date
            })

            if(response.status === 200){
                toast.success('Turma Atualizada!', {autoClose: 2000}) 
                history.push('/search-class')
            }        
        } catch(error){
            toast.error(error[0])
        }
    }


    async function handleSubmit(e){
        e.preventDefault()
        
        let response
        try {
            setLoading(true)

            response = await api.post('/school-class', {
                period,
                course,
                number_students,
                final_date,
                initial_date
            })

            if(response.status === 201){
                toast.success('Turma Criada!', {autoClose: 2000})
                setPeriod('')
                setStudents('')
            }
            
        } catch (error) {
            toast.error(error[0])
        } finally{
            setLoading(false)
        }


    }

    return (
        <>
            <HeaderAdmin/>
            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    
                    
                    <h1 className={style.title}>{id ? 'Atualizar Turma' : 'Cadastrar Turma'}</h1>

                    <form className={style.form} onSubmit={id ? handleUpdate : handleSubmit} >
                        
                        <fieldset>
                            <label>Periodo:</label>
                            <input value={period} onChange={({target}) => setPeriod(target.value)} type="text" />
                        </fieldset>
                        
                        <fieldset>
                            <label>Curso</label>
                            <select value={course} onChange={({target}) => setCurso(target.value)}>
                                {cursos && cursos.map(itens => {
                                    return(
                                        <option key={itens.id} value={itens.id}>{itens.name}</option>
                                    )   
                                })}
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Lotação</label>
                            <input value={number_students} onChange={({target}) => setStudents(target.value)} type="number"/>
                        </fieldset>
                    
                        <fieldset>
                            <label>Data de inicio:</label>
                            <input value={initial_date} onChange={({target}) => setInitial(target.value)} type="date" />
                        </fieldset>

                        <fieldset>
                            <label>Data de termino:</label>
                            <input value={final_date} onChange={({target}) => setFinal(target.value)} type="date" />
                        </fieldset>
                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
