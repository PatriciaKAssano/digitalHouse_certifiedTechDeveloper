import { useContext, useState } from "react";

import styles from "./Form.module.css";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Form } from "react-router-dom";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";



const LoginForm = () => {

  const [isVisible, setIsVisible] = useState(false);

  const [loginForm, setLoginForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");

  const navigate = useNavigate();

  const { fillLoginDataState } = useContext(AuthContext);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth();
    //Nesse handlesubmit você deverá usar o preventDefault,
    //enviar os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que faz o login /auth
    //lembre-se que essa rota vai retornar um Bearer Token e o mesmo deve ser salvo
    //no localstorage para ser usado em chamadas futuras
    //Com tudo ocorrendo corretamente, o usuário deve ser redirecionado a página principal,com react-router
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro
  };

  function handleVisible() {
    setIsVisible(!isVisible);
  }

  async function auth() {
    try {
      const response = await api.post("/auth", {
        username: loginForm,
        password: passwordForm,
      });
      navigate("/home");

      fillLoginDataState({
        token: response.data.token
      })
      console.log(response);

      setError(false);

    } catch (error) {
      alert("Login Error: There is an error in logging you into this application.");
    }
  }

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center card container ${styles.card}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              value={loginForm}
              onChange={(e) => setLoginForm(e.target.value)}
              className={`form-control ${styles.inputSpacing}`}
              placeholder="Login"
              name="login"
              required
            />

            <div className={styles.container_input}>
              <input
                value={passwordForm}
                onChange={(e) => setPasswordForm(e.target.value)}
                className={`form-control ${styles.inputSpacing}`}
                placeholder="Password"
                name="password"
                type={isVisible ? "text" : "password"}
                required
              />
              <div className={styles.icon} onClick={handleVisible}>

                {isVisible ? <FiEye /> : <FiEyeOff />}

              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;