import React from 'react'
import HeaderAdmin from './HeaderAdmin'
import style from './addTeacher.module.css'
import api from '../../config/api'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import perfil from '../../Assets/perfil.jpg'
import * as yup from 'yup'
import { format } from 'date-fns'


export default function AddClass() {

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
    const [formation, setFormation] = React.useState('')
    const [department, setDepartament] = React.useState('')
    const [departaments, setDepartaments] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [phone_number, setPhone] = React.useState('')
    const [rg, setRg] = React.useState('')
    const [cpf, setCpf] = React.useState('')

    const [update, setUpdate] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    async function populateDepartament(){
        let response
        try {
            response = await api.get('/department')
            console.log(response)
            setDepartaments(response.data)
        } catch (error) {
            
        }
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

            response = await api.get(`/teacher/${id}`);
            const { data } = response;

            
            const date = formatDate(data.teacher.birth_date)

            console.log('prof', data)
            setName(data.teacher.name)
            setSex(data.teacher.sex)
            setFather(data.teacher.father_name)
            setMother(data.teacher.mother_name)
            setNatural(data.teacher.naturalness)
            setNationality(data.teacher.nationality)
            setPhone(data.teacher.phone_number)
            setEmail(data.teacher.email)
            setRg(data.teacher.rg)
            setCpf(data.teacher.cpf)
            setBirth(date)
            setFormation(data.teacher.formation)
            setMarital(data.teacher.marital_status)
            setDepartament(response.data.department)
        } catch {
            history.push('/add-teacher/')
        }
    },[history])


    React.useEffect(() => {

        populateDepartament()

        if(id){
            setUpdate(false)
            populateForm(id)
        }


    }, [history, id, populateForm]);

    yup.setLocale({
        mixed: {
            default: 'é inválido',
            required: 'Preencha todos os campos obrigatórios',
        },
    });

    const handleUpdate = async(e) => {
        e.preventDefault()

        let response;
        try{
            response = await api.put(`/teacher/${id}`, {
                department,
                name,
                sex,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                formation,
                phone_number,
                account_role: 2,
                email,
                rg,
                cpf,
                marital_status,
            })

            if(response.status === 200){
                toast.success('Professor Atualizado!', {autoClose: 2000}) 
                history.push('/search-teacher')
            }        

        } catch(error){
            toast.error(error[0])
        }
    }

    async function handleSubmit(e){
        e.preventDefault()

        console.log(marital_status)
        console.log(department)
        let response
        try {

            setLoading(true)

            // await schema.validate({
            //     name,
            //     father_name,
            //     mother_name,
            //     naturalness,
            //     nationality,
            //     birth_date,
            //     formation,
            //     phone_number,
            //     email,
            //     password,
            //     rg,
            //     cpf,
            // }).catch(function(err){
            //     console.log(err.errors)
            //     throw(err.errors)
            // })

            
            response = await api.post('/teacher', {
                department,
                name,
                sex,
                father_name,
                mother_name,
                naturalness,
                nationality,
                birth_date,
                formation,
                phone_number,
                account_role: 2,
                email,
                password,
                rg,
                cpf,
                marital_status,
            })

            if(response.status === 201){
                toast.success('Professor Cadastrado')
                setName('')
                setFather('')
                setMother('')
                setNatural('')
                setNationality('')
                setPhone('')
                setEmail('')
                setPassword('')
                setRg('')
                setCpf('')
                setBirth('')
                setFormation('')
            }
            
            
        } catch (error) {
            console.log(error)
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
                    
                    
                    <h1 className={style.title}>{id ? 'Atualização de Dados sobre o Professor' : 'Cadastro de Professor'}</h1>
                    
                    
                    <img className={style.perfil} src={perfil} alt={"Foto do Professor"}/>

                    
                    <form className={style.form} onSubmit={ id ? handleUpdate : handleSubmit} >
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
                            <label>Formação:</label>
                            <input value={formation} onChange={({target}) => setFormation(target.value)} type="text" />
                        </fieldset>

                        <fieldset>
                            <label>departamento:</label>
                            <select value={department} onChange={({target}) => setDepartament(target.value)}>
                                {departaments && departaments.map(item => (
                                    <option key={item.id} value={item.id} >{item.name}</option>
                                ))}
                            </select>
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
                        {update &&
                        <h2 className={style.subtitle}>Conta:</h2>
                        }
                        
                        {update && <fieldset>

                            <label>E-mail:</label>
                            <input value={email} onChange={({target}) => setEmail(target.value)} type="email" />
                        

                        </fieldset>}

                        {update && <fieldset>
        
                            <label>Senha:</label>
                            <input value={password} onChange={({target}) => setPassword(target.value)} type="password" />

                        </fieldset>}

                        {loading ? <button disabled className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button> : <button className={style.submit} type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>}
                    </form>
                </div>
            </section>
        </>
    )
}
