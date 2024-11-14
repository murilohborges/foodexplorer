import { Container, HeaderMenu, ContentMenu, InputSearchMenu, ButtonMenu, FooterMenu } from "./styles";
import { useAuth } from "../../hooks/auth.jsx";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { USER_ROLE } from '../../utils/roles.js'

export function SideMenu({ menuIsOpen, onCloseMenu, receivedSearch}) {
  const { signOut } = useAuth();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const navigation = useNavigate();
  const [numberCart, setNumberCart] = useState()

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  function handleCloseMenu(){
    onCloseMenu(false)
  }

  useEffect(() => {
    receivedSearch(search);
  }, [search])

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`))
    if(cart == null){
      cart = []
    }
    setNumberCart(cart.length)
  }, [])

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <HeaderMenu>
        <button className="close-menu-button" onClick={handleCloseMenu}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.087868 17.3849 -0.087868 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.087868 17.3849 -0.087868 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.087868 1.18492 -0.087868 0.615076 0.263604 0.263604Z" fill="white"/>
          </svg>
        </button>
        <h1>Menu</h1>
      </HeaderMenu>

      <ContentMenu>
        <InputSearchMenu>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89499 3.61739C7.22926 2.72585 8.79794 2.25 10.4027 2.25H10.4027C12.5545 2.25014 14.6181 3.105 16.1397 4.62655C17.6613 6.14811 18.5161 8.21174 18.5163 10.3635V10.3636C18.5163 11.9683 18.0404 13.537 17.1489 14.8713C16.9924 15.1054 16.8244 15.3305 16.6456 15.5459L21.5694 20.4697C21.8623 20.7626 21.8623 21.2374 21.5694 21.5303C21.2765 21.8232 20.8016 21.8232 20.5087 21.5303L15.5849 16.6065C14.9626 17.1232 14.263 17.5467 13.5076 17.8596C12.025 18.4737 10.3937 18.6344 8.81978 18.3213C7.24589 18.0082 5.80019 17.2355 4.66548 16.1008C3.53078 14.9661 2.75803 13.5204 2.44497 11.9465C2.1319 10.3726 2.29258 8.74122 2.90668 7.25866C3.52078 5.77609 4.56072 4.50892 5.89499 3.61739ZM10.4026 3.75C9.09458 3.75001 7.81593 4.13789 6.72834 4.86459C5.64074 5.5913 4.79306 6.6242 4.2925 7.83268C3.79193 9.04116 3.66096 10.3709 3.91614 11.6538C4.17133 12.9368 4.80122 14.1152 5.72614 15.0401C6.65107 15.965 7.8295 16.5949 9.11241 16.8501C10.3953 17.1053 11.7251 16.9743 12.9336 16.4738C14.1421 15.9732 15.175 15.1255 15.9017 14.0379C16.6284 12.9503 17.0162 11.6717 17.0163 10.3636M10.4027 3.75C12.1567 3.75012 13.8388 4.44695 15.079 5.68721C16.3193 6.92748 17.0161 8.6096 17.0163 10.3636" fill="#C4C4CC"/>
          </svg>

          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputSearchMenu>

        <ButtonMenu to="/profile">Meu perfil</ButtonMenu>

        {
          [USER_ROLE.ADMIN].includes(user.role) && 
          <>
            <ButtonMenu to="/new">Novo Prato</ButtonMenu>
          </> 
        }

        {
          [USER_ROLE.CUSTOMER].includes(user.role) && 
          <>
            <ButtonMenu to="/cart">Carrinho ({numberCart})</ButtonMenu>
          </> 
        }

        <ButtonMenu to="/favourites">Meus favoritos</ButtonMenu>

        <ButtonMenu to="/orders">Histórico de pedidos</ButtonMenu>

        <ButtonMenu to="/" onClick={handleSignOut}>Sair</ButtonMenu>
        
      </ContentMenu>

      <FooterMenu>
        <div className="title-footer">
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76367 0.667969L19.29 5.16797V14.168L9.76367 18.668L0.237392 14.168V5.16797L9.76367 0.667969Z" fill="#4D585E"/>
          </svg>                    
          <h2>food explorer</h2>
        </div>
        
        <p>© 2023 - Todos os direitos reservados.</p>
      </FooterMenu>

    </Container>
  );
}