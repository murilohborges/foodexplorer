import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { LoadingWindow } from '../../components/LoadingWindow';
import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';


export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  
  function handleSignIn(){
    signIn({ email, password });
    setIsLoading(true)
  }

  return(
    <Container>
      <LoadingWindow isLoading={isLoading}/>

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

        <Link id="button-auth" className="button-auth" to="/register">Criar nova conta</Link>

      </Form>
        
    </Container>
  )
}