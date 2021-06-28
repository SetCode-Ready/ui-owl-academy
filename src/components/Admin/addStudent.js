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
        address_street: yup.string().required(),
        address_number: yup.string().required(),
        address_district: yup.string().required(),
        address_cep: yup.string().required(),
        address_city: yup.string().required(),
        address_state: yup.string().required(),
        phone_number: yup.string().required(),
        email: yup.string().email('Digite um email válido').required(),
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
    const [address_number, setAdressN] = React.useState('')
    const [address_district, setAdressD] = React.useState('')
    const [address_complement, setAdressC] = React.useState('')
    const [address_cep, setAdressCEP] = React.useState('')
    const [address_city, setCity] = React.useState('')
    const [address_state, setState] = React.useState('')
    const [phone_number, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [cpf, setCpf] = React.useState('')
    const [classes, setClass] = React.useState('')
    const [school_class, setClassA] = React.useState('')

    const [loading, setLoading] = React.useState(false)

    async function populateClasses(){
        let response
        try {
            response = await api.get('/school-class')

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
            setName(data.name)
            setSex(data.sex)
            setFather(data.father_name)
            setMother(data.mother_name)
            setNatural(data.naturalness)
            setNationality(data.nationality)
            setStreet(data.street)
            setAdressD(data.address_district)
            setAdressC(data.address_complement)
            setAdressCEP(data.address_cep)
            setCity(data.address_city)
            setState(data.address_state)
            setPhone(data.phone_number)
            setEmail(data.email)
            setRg(data.rg)
            setCpf(data.cpf)
            setBirth(data.birth_date)
            setEdu(data.formation)
            setClassA(data.school_class)
        } catch {
            history.push('/add-studant/')
        }
    },[history])


    React.useEffect(() => {

        populateClasses()

        if(id){
            populateForm(id)
        }


    }, [history, id, populateForm]);

    const handleUpdate = async(e) => {
        e.preventDefault()

        let response;
        try{

            await schema.validate({
                name,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                street,
                address_number,
                address_district,
                address_cep,
                address_city,
                address_state,
                phone_number,
                email,
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
                address_number: Number(address_number),
                address_district,
                address_complement,
                address_cep,
                address_city,
                address_state,
                phone_number,
                email,
                rg,
                cpf,
                school_class,
                institute: "1dd26546-67cb-47f2-a490-e20142f3504f",
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
                address_number,
                address_district,
                address_cep,
                address_city,
                address_state,
                phone_number,
                email,
                rg,
                cpf,
            }).catch(function(err){
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
                address_number: Number(address_number),
                address_district,
                address_complement,
                address_cep,
                address_city,
                address_state,
                phone_number,
                email,
                rg,
                cpf,
                school_class,
                institute: "1dd26546-67cb-47f2-a490-e20142f3504f",
            })

            

            if(response.status === 201){
                toast.success('Aluno Cadastrado')
                setName('')
                setFather('')
                setMother('')
                setNatural('')
                setNationality('')
                setStreet('')
                setAdressD('')
                setAdressC('')
                setAdressCEP('')
                setCity('')
                setState('')
                setPhone('')
                setEmail('')
                setRg('')
                setCpf('')
                setBirth('')
                setEdu('')
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

                        <fieldset>
                            <label>Turma</label>
                            <select value={school_class} onChange={({target}) => setClassA(target.value) } >
                                {classes && classes.map( item => (
                                    <option key={item.id} value={item.id} >{item.class_code}</option>
                                ))}
                            </select>
                        </fieldset>
                        
                        <h2 className={style.subtitle}>Endereço:</h2>

                        <fieldset className={style.street}>
                            <label>Longradouro:</label>
                            <input value={street} onChange={({target}) => setStreet(target.value)} type="text" />
                        </fieldset>

                        <fieldset className={style.number}>
                            <label>Nº:</label>
                            <input value={address_number} onChange={({target}) => setAdressN(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Bairro:</label>
                            <input value={address_district} onChange={({target}) => setAdressD(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Complemento:</label>
                            <input value={address_complement} onChange={({target}) => setAdressC(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>CEP:</label>
                            <input value={address_cep} onChange={({target}) => setAdressCEP(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Cidade:</label>
                            <input value={address_city} onChange={({target}) => setCity(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>Estado:</label>
                            <input value={address_state} onChange={({target}) => setState(target.value)} type="text" />
                        </fieldset>
                        
                        <h2 className={style.subtitle}>Contato:</h2>

                        <fieldset>
                            <label>Celular:</label>
                            <input value={phone_number} onChange={({target}) => setPhone(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>E-MAIL:</label>
                            <input value={email} onChange={({target}) => setEmail(target.value)} type="email" />
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


                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
