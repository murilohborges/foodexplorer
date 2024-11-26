import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Snackbars } from '../../components/Snackbar';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';
import { useSnackbar } from '../../context/SnackbarContext.jsx';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { signIn } = useAuth();
  const { snackbarMessage, severity, updateSnackbarMessage, clearSnackbarMessage } = useSnackbar();

  useEffect(() => {
    if (snackbarMessage) {
      setOpenSnackbar(true);
    } else if (loading) {
      setOpenSnackbar(true);
      updateSnackbarMessage("Carregando...", "info")
    }
  }, [alertMessage, loading]);
  
  async function handleSignIn(){
    setLoading(true);
    await signIn({ email, password });
    clearSnackbarMessage();
    setTimeout(() =>{
      setLoading(false);
    }, 1000)
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setAlertMessage("");
  };

  async function handleToRegister(){
    clearSnackbarMessage();
  }

  return(
    <Container>
      <Snackbars 
        open={openSnackbar}
        severity={severity} 
        title={snackbarMessage}
        onClose={handleCloseSnackbar} 
      />

      <HeaderLogo>
        <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
          </svg>
        <h1>food explorer</h1>
      </HeaderLogo>

      <Form>

        <div className="title">Faça login</div>

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

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link id="button-auth" className="button-auth" onClick={handleToRegister} to="/register">Criar nova conta</Link>

      </Form>
        
    </Container>
  )
}