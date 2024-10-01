import { Container, BackButton, Main, Form, SaveButton, Row, FixedContent } from "./styles.js";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api.js'


export function Profile() {
  const { user } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();
  var nameFile = '';

  function handleBack(){
    navigate(-1)
  }

  async function handleNewPlate(){
    if (!title) {
      return alert("Digite o título do prato");
    }

    if (!price) {
      return alert("Digite o preço do prato");
    }

    if (!description) {
      return alert("Digite a descrição do prato");
    }

    if (newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    const response = await api.post("/plates", {
      title,
      category,
      ingredients,
      price,
      description
    });

    const newPlateId = response.data.plate_id;

    try {
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        
  
        const response = await api.patch(`/plates/avatar/${newPlateId}`, fileUploadForm);
      }
    }catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      }else{
        alert("Não foi possível atualizar.")
      }
    }
    
    alert("Prato criado com sucesso");
    navigate(-1);
  }

  async function receivedSearch(search){
    return
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  return(
    <Container $menuIsOpen={menuIsOpen}>

      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={onCloseMenu}
        receivedSearch={receivedSearch}
      />

      <Header 
        receivedSearch={receivedSearch}
        receivedMenuIsOpen={receivedMenuIsOpen}
      />

      <FixedContent>
        <Main>
          <BackButton onClick={handleBack}>
            <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
            </svg>
            Voltar
          </BackButton>

          <Form>

            <h1>Atualizar meu perfil</h1>

            <Row id="row-one">
              <div className="wrapper-input">
                <label>Nome</label>
                <Input
                  type="text" 
                  placeholder="Digite seu novo nome"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-two">
              <div className="wrapper-input">
                <label>Email</label>
                <Input
                  type="email" 
                  placeholder="Digite seu novo email"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-three">
              <div className="wrapper-input">
                <label>Senha atual</label>
                <Input
                  type="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-four">
              <div className="wrapper-input">
                <label>Senha nova</label>
                <Input
                  type="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-five" onClick={handleNewPlate}>
              <SaveButton >Salvar alterações</SaveButton>
            </Row>
          </Form>

        </Main>

      </FixedContent>
        
      <Footer/>
    </Container>
  )
}