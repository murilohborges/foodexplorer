import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link } from "react-router-dom";


export function SignUp() {


  return(
    <Container>

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
          <Input placeholder="Exemplo: Maria da Silva"/>
        </div>

        <div className="wrapper-input">
          <label>Email</label>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
        </div>

        <div className="wrapper-input">
          <label>Senha</label>
          <Input placeholder="No mínimo 6 caracteres"/>
        </div>

        <Button title="Criar conta" />
        <Link className="button-auth" to="/">Já tenho uma conta</Link>

      </Form>
        
    </Container>
  )
}