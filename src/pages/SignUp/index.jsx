import { Container, Form, HeaderLogo } from "./styles.js";
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link, useNavigate } from "react-router-dom";
import{ useState } from 'react';
import { api } from '../../services/api.js'


export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos")
    }

    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    }).catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível cadastrar");
      }
    })

  }

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
          <Input
            type="text"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="wrapper-input">
          <label>Email</label>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="wrapper-input">
          <label>Senha</label>
          <Input 
            type="password" 
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />
        <Link className="button-auth" to="/">Já tenho uma conta</Link>

      </Form>
        
    </Container>
  )
}