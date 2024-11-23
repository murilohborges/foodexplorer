import { Container, ButtonHeader } from "./styles.js";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from '../../utils/roles.js';
import { useAuth } from "../../hooks/auth.jsx";
import { useState, useEffect } from "react";

export function PanelButton(){
  const navigation = useNavigate();
  const { user } = useAuth();
  const [userName, setUserName] = useState("");

  function handleNewPlate(){
    navigation("/new");
  }

  function handleToFavourites(){
    navigation("/favourites");
  }

  function handleToProfile(){
    navigation("/profile");
  }

  function handleToOrders(){
    navigation("/orders");
  }

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("@foodexplorer:user"));
    setUserName(userData.name)
  }, []);

  return (
    <Container>
      <h2>Bem vindo(a) {userName}</h2>

      <div className="wrapper-buttons">
        <ButtonHeader onClick={handleToProfile}>Meu perfil</ButtonHeader>

        <ButtonHeader onClick={handleToFavourites}>Meus Favoritos</ButtonHeader>

        {
          [USER_ROLE.CUSTOMER].includes(user.role) && 
          <>
            <ButtonHeader onClick={handleToOrders}>Histórico de pedidos</ButtonHeader>
          </> 
        }

        {
          [USER_ROLE.ADMIN].includes(user.role) && 
          <>
            <ButtonHeader onClick={handleNewPlate}>Novo prato</ButtonHeader>
          </> 
        }
      </div>
      
    </Container>
  )
}