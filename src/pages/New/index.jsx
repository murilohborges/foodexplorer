import { Container, BackButton, Main, Form, Avatar, SaveButton, Row, FixedContent } from "./styles.js";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Textarea } from "../../components/Textarea/index.jsx";
import { NoteItem } from "../../components/NoteItem/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { Link } from "react-router-dom";
import plateIcon from '../../assets/plateIcon.png';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api.js'


export function New() {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [price, setPrice] = useState("00,00");
  const [description, setDescription] = useState("");

  const avatarUrl = plateIcon;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
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

  async function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
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

            <h1>Novo prato</h1>

            <Row id="row-one">
              <div className="wrapper-input">
                <label htmlFor="avatar">
                  Imagem do prato
                </label>

                <Avatar >
                  <label htmlFor="avatar" className="file-label">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z" fill="white"/>
                    </svg>

                    <p>Selecione a imagem</p>

                    <input 
                      id="avatar"
                      type="file"
                      onChange={handleChangeAvatar}
                    />
                  </label>
                  
                </Avatar>
              </div>

              <div className="wrapper-input">
                <label htmlFor="name">
                  Nome
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Ex.: Salada Cesar" 
                  onChange={e => setTitle(e.target.value)}
                />
              </div>

              <div className="wrapper-input">
                <label htmlFor="type">
                  Categoria
                </label>

                <select id="type" onChange={e => setCategory(e.target.value)}>
                  <option value="Refeição">Refeição</option>
                  <option value="Sobremesa">Sobremesa</option>
                  <option value="Bebida">Bebida</option>
                </select>
              </div>
            </Row>

            <Row className="row-two">
              <div className="wrapper-input">
                <label htmlFor="ingredients">
                  Ingredientes
                </label>
                <div className="ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                      <NoteItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                  <NoteItem 
                    isNew
                    placeholder="Adicionar"
                    onChange={e => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                  
                </div>  
              </div>

              <div className="wrapper-input">
                <label htmlFor="price">
                  Preço
                </label>
                <input 
                  type="number" 
                  id="price" 
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-three">
              <div className="wrapper-input">
                <label htmlFor="description">
                  Descrição
                </label>
                <Textarea 
                  id="description" 
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
                  onChange={e => setDescription(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-four" onClick={handleNewPlate}>
              <SaveButton >Salvar alterações</SaveButton>
            </Row>


          </Form>

        </Main>

        
      </FixedContent>
        
      <Footer/>
    </Container>
  )
}