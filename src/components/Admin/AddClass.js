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

    const [categorie, setCategorie] = React.useState()
    const [code, setCode] = React.useState('')
    const [lotacao, setLotacao] = React.useState('')
    const [status, setStatus] = React.useState(true)
    const [ensino, setEnsino] = React.useState(1)
    const [loading, setLoading] = React.useState(false)
    
    const populateClassCategorie = async () => {
        const response = await api.get('/class-categorie')
        
        setCategorie(response.data);
    }
    
    const populateForm = React.useCallback(async (id) => {
        let response
        try{
            response = await api.get(`/school-class/${id}`);
            const { data } = response;
        
            setCode(data.class_code)
            setLotacao(data.max_students)
            setStatus(data.status)

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
            response = await api.post(`http://api-owl-academy.herokuapp.com/school-class/${id}`, {
                class_code: code,
                class_categorie: ensino,
                max_students: Number(lotacao),
                status,
                institute: "7292c035-923b-44dc-9b4d-8803fad202af"
            })

            if(response.status === 200)toast.success('Turma Atualizada!')
        } catch(error){
            toast.error('Erro! Turma não atualizada')
        }
    }

    async function handleSubmit(e){
        e.preventDefault()
        let response
        try {
            setLoading(true)
            response = await api.post('/school-class', {
                class_code: code,
                class_categorie: ensino,
                max_students: Number(lotacao),
                status,
                institute: "7292c035-923b-44dc-9b4d-8803fad202af"
            })

            if(response.status === 201)toast.success('Turma Criada!')
            
        } catch (error) {
            toast.error('Erro! Turma não criada')
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
                            <label>Código da turma</label>
                            <input value={code} type="text" onChange={({target}) => setCode(target.value)}></input>
                        </fieldset>
                        
                        <fieldset>
                            <label>Status</label>
                            <select value={status} onChange={({target}) => setStatus(target.value)} >
                                <option value={true}>Ativo</option>
                                <option value={false}>Inativo</option>
                            </select>
                        </fieldset>
                        
                        <fieldset>
                            <label>Ensino</label>
                            <select value={ensino} onChange={({target}) => setEnsino(target.value)}>
                                {categorie && categorie.map(itens => {
                                    return(
                                        <option key={itens.id} value={itens.id}>{itens.categorie_name}</option>
                                    )   
                                })}
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Lotação</label>
                            <input value={lotacao} onChange={({target}) => setLotacao(target.value)} type="number"/>
                        </fieldset>
                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
