import { Container, BackButton, Main, Form, SaveButton, Row, FixedContent } from "./styles.js";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Input } from "../../components/Input/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { Snackbars } from "../../components/Snackbar";
import { api } from '../../services/api.js';

export function Profile() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  function handleBack(){
    navigate(-1)
  }

  async function handleUpdateProfile(){
    await api.put("/users", {
      name: newName,
      email: newEmail,
      password: password,
      old_password: oldPassword
    }).then(() => {
      setAlertMessage("Perfil atualizado com sucesso!");
      if(newName){
        const userDataToUpdate = JSON.parse(localStorage.getItem(`@foodexplorer:user`));
        userDataToUpdate.name = newName;
        localStorage.setItem(`@foodexplorer:user`, JSON.stringify(userDataToUpdate));
      }
      
    }).catch(error => {
      if(error.response){
        setAlertMessage(error.response.data.message);
      }
    });

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

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setAlertMessage("");
  };

  useEffect(() => {
    if (alertMessage) {
      setOpenSnackbar(true);
      switch(alertMessage){
        case "Preencha todos os campos":
          setSeverity("warning");
          break;
        case "Perfil atualizado com sucesso!":
          setSeverity("success");
          break;
        default:
        setSeverity("error");
        break;
      }
    } else if (loading) {
      setLoading(true)
      setOpenSnackbar(true);
      setSeverity("info");
    }
  }, [alertMessage, loading]);

  return(
    <Container $menuIsOpen={menuIsOpen}>
      <Snackbars
        open={openSnackbar}
        severity={severity} 
        title={alertMessage}
        onClose={handleCloseSnackbar} 
      />

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
                  onChange={e => setNewName(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-two">
              <div className="wrapper-input">
                <label>Email</label>
                <Input
                  type="email" 
                  placeholder="Digite seu novo email"
                  onChange={e => setNewEmail(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-three">
              <div className="wrapper-input">
                <label>Senha atual</label>
                <Input
                  type="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setOldPassword(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-four">
              <div className="wrapper-input">
                <label>Senha nova</label>
                <Input
                  type="password" 
                  placeholder="No mínimo 6 caracteres"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </Row>

            <Row className="row-five" onClick={handleUpdateProfile}>
              <SaveButton >Salvar alterações</SaveButton>
            </Row>
          </Form>

        </Main>

      </FixedContent>
        
      <Footer/>
    </Container>
  )
}