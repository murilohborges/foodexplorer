import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Snackbars } from '../../components/Snackbars';
import { Link, useNavigate } from "react-router-dom";
import{ useState, useEffect } from 'react';
import { api } from '../../services/api.js'


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [alertMessage, setAlertMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [loading, setLoading] = useState(false);

  function handleSignUp(){
    if(!name || !email || !password){
      setAlertMessage("Preencha todos os campos");
      return
    }

    api.post("/users", { name, email, password }).then(() => {
      setAlertMessage("Usuário cadastrado com sucesso!");
      navigate("/");
    }).catch(error => {
      if(error.response){
        setAlertMessage(error.response.data.message);
      }else{
        setAlertMessage("Não foi possível cadastrar");
      }
    })
  }

  useEffect(() => {
    if (alertMessage) {
      setOpenSnackbar(true);
      switch(alertMessage){
        case "Preencha todos os campos":
          setSeverity("warning");
          break;
        case "Usuário cadastrado com sucesso!":
          setSeverity("success");
          break;
        default:
        setSeverity("error");
        break;
      }
    } else if (loading) {
      setOpenSnackbar(true);
      setSeverity("info");
    }
  }, [alertMessage, loading]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setAlertMessage("");
  };

  async function handleToLogin(){
    setAlertMessage("");
  }

  return(
    <Container>
      <Snackbars 
        open={openSnackbar}
        severity={severity} 
        title={alertMessage || "Carregando..."}
        onClose={handleCloseSnackbar} 
      />

      <HeaderLogo>
        <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
          </svg>
        <h1>food explorer</h1>
      </HeaderLogo>

      <Form>

        <div className="title">Crie sua conta</div>

        <div className="wrapper-input">
          <label>Seu nome</label>
          <Input
            id="name-input-SignIn"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="wrapper-input">
          <label>Email</label>
          <Input
            id="email-input-SignIn"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="wrapper-input">
          <label>Senha</label>
          <Input
            id="password-input-SignIn"
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />
        <Link className="button-auth" onClick={handleToLogin} to="/">Já tenho uma conta</Link>

      </Form>
        
    </Container>
  )
}