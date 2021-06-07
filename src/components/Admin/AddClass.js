import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addClass.module.css'
import api from '../../config/api'

export default function AddClass() {

    const [categorie, setCategorie] = React.useState()

    const [code, setCode] = React.useState('')
    const [lotacao, setLotacao] = React.useState('')
    const [status, setStatus] = React.useState(true)
    const [ensino, setEnsino] = React.useState(1)
    const [message, setMessage] = React.useState()
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        async function reque(){
            const response = await api.get('/class-categorie')
    
            setCategorie(response.data)
        }
        reque()
    }, [])

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

            if(response.statusText === 'Created') setMessage('Turma criada')
            
        } catch (error) {
            setMessage('Erro turma não criada')
        } finally{
            setLoading(false)
        }
    }


    return (
        <>
            <HeaderAdmin/>
            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    
                    
                    <h1 className={style.title}>Cadastrar Turma</h1>

                    <form className={style.form} onSubmit={handleSubmit} >
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
                        {loading ? <button disabled className={style.submit} type="submit">Cadastrar</button> : <button className={style.submit} type="submit">Cadastrar</button>}
                    </form>
                    <div className={style.ContainerMessage} >
                        <p className={style.Message} >{message}</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}
