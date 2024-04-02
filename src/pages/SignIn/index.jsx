import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';


export function SignIn() {
  const data = useAuth();


  return(
    <Container>

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
          <Input className="input-SignIn" placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </div>

        <div className="wrapper-input">
          <label>Senha</label>
          <Input className="input-SignIn" type="password" placeholder="No mínimo 6 caracteres"/>
        </div>

        <Button title="Entrar" />
        <Link className="button-auth" to="/register">Criar nova conta</Link>

      </Form>
        
    </Container>
  )
}