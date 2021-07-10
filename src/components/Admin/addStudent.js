import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addStudent.module.css'
import api from '../../config/api'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import perfil from '../../Assets/perfil.jpg'
import * as yup from 'yup'

export default function AddClass() {
    
    yup.setLocale({
        mixed: {
            default: 'é inválido',
            required: 'Preencha todos os campos obrigatórios',
            email: 'tem o formato de e-mail inválido',
        },
    });

    let schema = yup.object().shape({
        name: yup.string().required(),
        father_name: yup.string().required(),
        mother_name: yup.string().required(),
        naturalness: yup.string().required(),
        nationality: yup.string().required(),
        birth_date: yup.date().required(),
        street: yup.string().required(),
        number: yup.string().required(),
        district: yup.string().required(),
        cep: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        phone_number: yup.string().required(),
        email: yup.string().email('Digite um email válido').required(),
        password: yup.string().required(),
        rg: yup.string().required(),
        cpf: yup.string().required(),
    })

    let schema_up = yup.object().shape({
        name: yup.string().required(),
        father_name: yup.string().required(),
        mother_name: yup.string().required(),
        naturalness: yup.string().required(),
        nationality: yup.string().required(),
        birth_date: yup.date().required(),
        street: yup.string().required(),
        number: yup.string().required(),
        district: yup.string().required(),
        cep: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        phone_number: yup.string().required(),
        rg: yup.string().required(),
        cpf: yup.string().required(),
    })

    const {id} = useParams()
    const history = useHistory()

    const [name, setName] = React.useState('')
    const [sex, setSex] = React.useState('M')
    const [marital_status, setMarital] = React.useState('Solteiro')
    const [father_name, setFather] = React.useState('')
    const [mother_name, setMother] = React.useState('')
    const [naturalness, setNatural] = React.useState('')
    const [nationality, setNationality] = React.useState('')
    const [birth_date, setBirth] = React.useState('')
    const [education_level, setEdu] = React.useState('')
    const [street, setStreet] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [district, setDistrict] = React.useState('')
    const [complement, setComplement] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [phone_number, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [classes, setClass] = React.useState('')
    const [school_class, setClassA] = React.useState('')

    const [update, setUpdate] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    async function populateClasses(){
        let response
        try {
            response = await api.get('/school-class')

            console.log(response)

            if(response.status === 200) setClass(response.data)
            setClassA(response.data[0].id)
        } catch (error) {
            setClass('Classes não encontradas')
        }
    }
    
    const populateForm = React.useCallback(async (id) => {
        let response
        try{
            response = await api.get(`/studant/${id}`);
            const { data } = response;
            console.log(data)
            setName(data.studant.name)
            setSex(data.studant.sex)
            setFather(data.studant.father_name)
            setMother(data.studant.mother_name)
            setNatural(data.studant.naturalness)
            setNationality(data.studant.nationality)
            setStreet(data.address[0].street)
            setNumber(data.address[0].number)
            setDistrict(data.address[0].district)
            setComplement(data.address[0].complement)
            setCep(data.address[0].cep)
            setCity(data.address[0].city)
            setState(data.address[0].state)
            setPhone(data.studant.phone_number)
            setRg(data.studant.rg)
            setCpf(data.studant.cpf)
            setBirth(data.studant.birth_date)
            setEdu(data.studant.education_level)
            setClassA(data.studant.school_class)
        } catch {
            history.push('/add-studant/')
        }
    },[history])


    React.useEffect(() => {

        populateClasses()

        if(id){
            setUpdate(false)
            populateForm(id)
        }


    }, [history, id, populateForm]);

    const handleUpdate = async(e) => {
        e.preventDefault()

        let response;
        try{

            await schema_up.validate({
                name,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                street,
                number,
                district,
                cep,
                city,
                state,
                phone_number,
                rg,
                cpf,
            }).catch(function(err){
                throw(err.errors)
            })

            response = await api.put(`/studant/${id}`, {
                name,
                sex,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                education_level,
                street,
                number: Number(number),
                district,
                complement,
                cep,
                city,
                state,
                phone_number,
                rg,
                cpf,
                school_class,
            })

            if(response.status === 200){
                toast.success('Aluno Atualizado!', {autoClose: 2000}) 
                history.push('/search-student')
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

            await schema.validate({
                name,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                street,
                number,
                district,
                cep,
                city,
                state,
                phone_number,
                email,
                password,
                rg,
                cpf,
            }).catch(function(err){
                console.log(err)
                throw(err.errors)
            })

            response = await api.post('/studant', {
                name,
                sex,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                education_level,
                street,
                number: Number(number),
                district,
                complement,
                cep,
                city,
                state,
                phone_number,
                email,
                password,
                rg,
                cpf,
                school_class,
                account_role: 1
            })

            if(response.status === 201){
                toast.success('Aluno Cadastrado')
                setName('')
                setFather('')
                setMother('')
                setNatural('')
                setNationality('')
                setStreet('')
                setDistrict('')
                setComplement('')
                setCep('')
                setCity('')
                setState('')
                setPhone('')
                setEmail('')
                setRg('')
                setCpf('')
                setBirth('')
                setEdu('')
                setPassword('')
            }
            
            
        } catch (error) {
            toast.error(error[0])
        } finally{
            setLoading(false)
            console.log(school_class)
        }
    }

    return (
        <>
            <HeaderAdmin/>
            <section className={style.containerMain}>
                <div className={style.containerDiv}>
                    
                    
                    <h1 className={style.title}>{id ? 'Atualização de Dados sobre o Aluno' : 'Cadastro de Aluno'}</h1>
                    
                    
                    <img className={style.perfil} src={perfil} alt={"Foto da Turma"}/>

                    
                    <form className={style.form} onSubmit={id ? handleUpdate : handleSubmit} >
                    <fieldset className={style.name}>
                            <label>Nome completo:</label>
                            <input value={name} type="text" onChange={({target}) => setName(target.value)} />
                        </fieldset>
                        
                        <fieldset>
                            <label>Sexo:</label>
                            <select value={sex} onChange={({target}) => setSex(target.value)} >
                                <option value={'M'}>Masculino</option>
                                <option value={'F'}>Feminino</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Estado Civil:</label>
                            <select value={marital_status} onChange={({target}) => setMarital(target.value)}>
                                <option value={'Solteiro'}>Solteiro</option>
                                <option value={'Casado'}>Casado</option>
                                <option value={'Em união Estável'}>Em união Estável</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <label>Nome do pai:</label>
                            <input value={father_name} onChange={({target}) => setFather(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Nome da mãe:</label>
                            <input value={mother_name} onChange={({target}) => setMother(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Naturalidade:</label>
                            <input value={naturalness} onChange={({target}) => setNatural(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Nacionalidade:</label>
                            <input value={nationality} onChange={({target}) => setNationality(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Data de nascimento:</label>
                            <input value={birth_date} onChange={({target}) => setBirth(target.value)} type="date" />
                        </fieldset>

                        <fieldset>
                            <label>Nivel de Escolaridade:</label>
                            <input value={education_level} onChange={({target}) => setEdu(target.value)} type="text" />
                        </fieldset>

                        <h2 className={style.subtitle}>Endereço:</h2>

                        <fieldset className={style.street}>
                            <label>Longradouro:</label>
                            <input value={street} onChange={({target}) => setStreet(target.value)} type="text" />
                        </fieldset>

                        <fieldset className={style.number}>
                            <label>Nº:</label>
                            <input value={number} onChange={({target}) => setNumber(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Bairro:</label>
                            <input value={district} onChange={({target}) => setDistrict(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Complemento:</label>
                            <input value={complement} onChange={({target}) => setComplement(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>CEP:</label>
                            <input value={cep} onChange={({target}) => setCep(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Cidade:</label>
                            <input value={city} onChange={({target}) => setCity(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Estado:</label>
                            <input value={state} onChange={({target}) => setState(target.value)} type="text" />
                        </fieldset>
                        
                        <h2 className={style.subtitle}>Contato:</h2>

                        <fieldset>
                            <label>Celular:</label>
                            <input value={phone_number} onChange={({target}) => setPhone(target.value)} type="text" />
                        </fieldset>

                        <h2 className={style.subtitle}>Documentos:</h2>

                        <fieldset>
                            <label>RG (Identidade):</label>
                            <input value={rg} onChange={({target}) => setRg(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>CPF:</label>
                            <input value={cpf} onChange={({target}) => setCpf(target.value)} type="text" />
                        </fieldset>
<<<<<<< HEAD

                        {update &&
                            <h2 className={style.subtitle}>Conta:</h2>
                        }

=======
>>>>>>> 4870a8ddb6cee4ad0b4f7ab86e0127922563db27
                        {update && <fieldset>
                            <h2 className={style.subtitle}>Conta:</h2>
                            
                            <label>E-mail:</label>
                            <input value={email} onChange={({target}) => setEmail(target.value)} type="email" />

                        </fieldset>}
                        
                        {update && <fieldset>
                            <label>Senha:</label>
                            <input value={password} onChange={({target}) => setPassword(target.value)} type="password" />
                        </fieldset>
                        }

                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
