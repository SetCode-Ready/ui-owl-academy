import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addTeacher.module.css'
import api from '../../config/api'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import perfil from '../../Assets/perfil.jpg'

export default function AddClass() {
    
    const {id} = useParams()
    const history = useHistory()

    const [code, setCode] = React.useState('')
    const [lotacao, setLotacao] = React.useState('')
    const [categorie, setCategorie] = React.useState()
    const [ensino, setEnsino] = React.useState(1)
    const [status, setStatus] = React.useState(true)
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

            if(code.length === 0 || lotacao.length === 0){
                toast.warn("Preencha os campos corretamente")
                return
            }
            response = await api.put(`/school-class/${id}`, {
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

        if(code.length === 0 || lotacao.length === 0){
            toast.warn("Preencha os campos corretamente")
            return
        }

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
                    
                    
                    <h1 className={style.title}>{id ? 'Atualização de Dados sobre o Professor' : 'Cadastro de Professor'}</h1>
                    
                    
                    <img className={style.perfil} src={perfil} alt={"Foto do Professor"}/>

                    
                    <form className={style.form} onSubmit={id ? handleUpdate : handleSubmit} >
                        <fieldset className={style.name}>
                            <label>Nome completo:</label>
                            <input type="text" />
                        </fieldset>
                        
                        <fieldset>
                            <label>Sexo:</label>
                            <select>
                                <option value={true}>Masculino</option>
                                <option value={false}>Feminino</option>
                                <option value={false}>Feminino</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Estado Civil:</label>
                            <select>
                                <option value={true}>Solteiro</option>
                                <option value={false}>Casado</option>
                                <option value={false}>Em união Estável</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Nome do pai:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Nome da mãe:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Naturalidade:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Nacionalidade:</label>
                            <input type="text" />
                        </fieldset>
                        
                        <h2 className={style.subtitle}>Endereço:</h2>

                        <fieldset className={style.street}>
                            <label>Longradouro:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset className={style.number}>
                            <label>Nº:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Bairro:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Complemento:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>CEP:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Cidade:</label>
                            <input type="text" />
                        </fieldset>
                        
                        <h2 className={style.subtitle}>Contato:</h2>

                        <fieldset>
                            <label>Celular:</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>E-MAIL:</label>
                            <input type="email" />
                        </fieldset>

                        <h2 className={style.subtitle}>Documentos:</h2>

                        <fieldset>
                            <label>RG (Identidade):</label>
                            <input type="text" />
                        </fieldset>

                        <fieldset>
                            <label>CPF:</label>
                            <input type="text" />
                        </fieldset>


                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
