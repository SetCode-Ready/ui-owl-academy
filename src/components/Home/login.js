import React from "react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./login.module.css";
import { User} from "../UserContext.js";
import { ReactComponent as Logo } from "../../Assets/Owl-HEAD.svg";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { userLogin, loading } = User();
  const history = useHistory();
  const params = useParams()



  async function handleSubmit(e) {
    e.preventDefault();

    const {user} = params

    let account_role;

    if (user === "student") {
      account_role = 3;
    } else if (user === "teacher") {
      account_role = 2;
    } else {
      account_role = 1;
    }

    try{
      if (email.length > 0 && password.length > 0) {
        const response = await userLogin(email, password, account_role);
        if (response.status === 200) {
          if (account_role === 3) {
            history.push("/student/dashboard");
          } else if (account_role === 2) {
            history.push("/teacher/dashboard");
          } else {
            history.push("/admin");
          }
        }
      } else {
        toast.error("Preencha todos os campos!");
      }
    } catch(error){
      toast.error('Usuário e/ou senha incorretos!')
    }

  }

  return (
    <>
      <header className={style.ContainerHeaderBG}>
        <section className={style.ContainerHeader}>
          <NavLink to="/" className={style.LogoHeader}>
            <Logo />
          </NavLink>
        </section>
      </header>

      <section className={style.containerMain}>
        <div className={style.containerDiv}>
          <h1 className={style.title}>Fazer Login</h1>
          <form className={style.form} onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              value={email}
              type="email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <label>Senha:</label>
            <input
              value={password}
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <NavLink to="/recovery-password">Esqueceu sua senha?</NavLink>
            {loading ? (
              <button disabled className={style.submit} type="submit">
                <p>entrar</p>
              </button>
            ) : (
              <button className={style.submit} type="submit">
                <p>entrar</p>
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
