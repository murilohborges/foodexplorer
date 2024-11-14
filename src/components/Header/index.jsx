import { Container, Logo, InputSearch, ButtonLogout, ButtonOrders } from "./styles.js";
import { useAuth } from "../../hooks/auth.jsx";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { USER_ROLE } from '../../utils/roles.js'

export function Header({receivedSearch, receivedMenuIsOpen}) {
  const { signOut } = useAuth();
  const navigation = useNavigate();
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const [numberCart, setNumberCart] = useState()

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  function handleOpenMenu(){
    receivedMenuIsOpen(true);
  }

  function handleToCart(){
    navigation("/cart");
  }

  function handleToOrders(){
    navigation("/orders");
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

  return(
    <Container>

      <div className="header-content">
        <button className="menu-button" onClick={handleOpenMenu}>
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00023C0 0.447944 0.447715 0.000228882 1 0.000228882H23C23.5523 0.000228882 24 0.447944 24 1.00023C24 1.55251 23.5523 2.00023 23 2.00023H1C0.447715 2.00023 0 1.55251 0 1.00023ZM0 9.00023C0 8.44794 0.447715 8.00023 1 8.00023H23C23.5523 8.00023 24 8.44794 24 9.00023C24 9.55251 23.5523 10.0002 23 10.0002H1C0.447715 10.0002 0 9.55251 0 9.00023ZM0 17.0002C0 16.4479 0.447715 16.0002 1 16.0002H23C23.5523 16.0002 24 16.4479 24 17.0002C24 17.5525 23.5523 18.0002 23 18.0002H1C0.447715 18.0002 0 17.5525 0 17.0002Z" fill="white"/>
          </svg>
        </button>

        <Logo>
          <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6933 0.5L21.351 6.65327V18.9598L10.6933 25.1131L0.0354824 18.9598V6.65327L10.6933 0.5Z" fill="#065E7C"/>
          </svg>
          <h1>food explorer</h1>
          {
            [USER_ROLE.ADMIN].includes(user.role) && 
            <>
              <h2>admin</h2>
            </> 
          }
        </Logo>

        
        <InputSearch>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89499 3.61739C7.22926 2.72585 8.79794 2.25 10.4027 2.25H10.4027C12.5545 2.25014 14.6181 3.105 16.1397 4.62655C17.6613 6.14811 18.5161 8.21174 18.5163 10.3635V10.3636C18.5163 11.9683 18.0404 13.537 17.1489 14.8713C16.9924 15.1054 16.8244 15.3305 16.6456 15.5459L21.5694 20.4697C21.8623 20.7626 21.8623 21.2374 21.5694 21.5303C21.2765 21.8232 20.8016 21.8232 20.5087 21.5303L15.5849 16.6065C14.9626 17.1232 14.263 17.5467 13.5076 17.8596C12.025 18.4737 10.3937 18.6344 8.81978 18.3213C7.24589 18.0082 5.80019 17.2355 4.66548 16.1008C3.53078 14.9661 2.75803 13.5204 2.44497 11.9465C2.1319 10.3726 2.29258 8.74122 2.90668 7.25866C3.52078 5.77609 4.56072 4.50892 5.89499 3.61739ZM10.4026 3.75C9.09458 3.75001 7.81593 4.13789 6.72834 4.86459C5.64074 5.5913 4.79306 6.6242 4.2925 7.83268C3.79193 9.04116 3.66096 10.3709 3.91614 11.6538C4.17133 12.9368 4.80122 14.1152 5.72614 15.0401C6.65107 15.965 7.8295 16.5949 9.11241 16.8501C10.3953 17.1053 11.7251 16.9743 12.9336 16.4738C14.1421 15.9732 15.175 15.1255 15.9017 14.0379C16.6284 12.9503 17.0162 11.6717 17.0163 10.3636M10.4027 3.75C12.1567 3.75012 13.8388 4.44695 15.079 5.68721C16.3193 6.92748 17.0161 8.6096 17.0163 10.3636" fill="#C4C4CC"/>
          </svg>

          <input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes" 
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputSearch>

        {
          [USER_ROLE.CUSTOMER].includes(user.role) && 
          <>
            <ButtonOrders onClick={handleToCart}>
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53906 8C5.53906 7.44772 5.98678 7 6.53906 7H19.5391C20.0913 7 20.5391 7.44772 20.5391 8C20.5391 8.55229 20.0913 9 19.5391 9H6.53906C5.98678 9 5.53906 8.55229 5.53906 8Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53906 12C5.53906 11.4477 5.98678 11 6.53906 11H19.5391C20.0913 11 20.5391 11.4477 20.5391 12C20.5391 12.5523 20.0913 13 19.5391 13H6.53906C5.98678 13 5.53906 12.5523 5.53906 12Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.624849 0.585787C0.999921 0.210714 1.50863 0 2.03906 0H24.0391C24.5695 0 25.0782 0.210714 25.4533 0.585787C25.8284 0.960861 26.0391 1.46957 26.0391 2V21C26.0391 21.3466 25.8596 21.6684 25.5648 21.8507C25.27 22.0329 24.9018 22.0494 24.5918 21.8944L21.0391 20.118L17.4863 21.8944C17.2047 22.0352 16.8734 22.0352 16.5919 21.8944L13.0391 20.118L9.48628 21.8944C9.20475 22.0352 8.87338 22.0352 8.59185 21.8944L5.03906 20.118L1.48628 21.8944C1.17629 22.0494 0.808148 22.0329 0.513331 21.8507C0.218515 21.6684 0.0390625 21.3466 0.0390625 21V2C0.0390625 1.46957 0.249777 0.960859 0.624849 0.585787ZM24.0391 2L2.03906 2L2.03906 19.382L4.59185 18.1056C4.87338 17.9648 5.20475 17.9648 5.48628 18.1056L9.03906 19.882L12.5918 18.1056C12.8734 17.9648 13.2047 17.9648 13.4863 18.1056L17.0391 19.882L20.5918 18.1056C20.8734 17.9648 21.2047 17.9648 21.4863 18.1056L24.0391 19.382V2Z" fill="white"/>
              </svg>

              Carrinho ({numberCart})
            </ButtonOrders>
          </> 
        }
        
        {
          [USER_ROLE.ADMIN].includes(user.role) && 
          <>
            <ButtonOrders onClick={handleToOrders}>
              <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53906 8C5.53906 7.44772 5.98678 7 6.53906 7H19.5391C20.0913 7 20.5391 7.44772 20.5391 8C20.5391 8.55229 20.0913 9 19.5391 9H6.53906C5.98678 9 5.53906 8.55229 5.53906 8Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53906 12C5.53906 11.4477 5.98678 11 6.53906 11H19.5391C20.0913 11 20.5391 11.4477 20.5391 12C20.5391 12.5523 20.0913 13 19.5391 13H6.53906C5.98678 13 5.53906 12.5523 5.53906 12Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.624849 0.585787C0.999921 0.210714 1.50863 0 2.03906 0H24.0391C24.5695 0 25.0782 0.210714 25.4533 0.585787C25.8284 0.960861 26.0391 1.46957 26.0391 2V21C26.0391 21.3466 25.8596 21.6684 25.5648 21.8507C25.27 22.0329 24.9018 22.0494 24.5918 21.8944L21.0391 20.118L17.4863 21.8944C17.2047 22.0352 16.8734 22.0352 16.5919 21.8944L13.0391 20.118L9.48628 21.8944C9.20475 22.0352 8.87338 22.0352 8.59185 21.8944L5.03906 20.118L1.48628 21.8944C1.17629 22.0494 0.808148 22.0329 0.513331 21.8507C0.218515 21.6684 0.0390625 21.3466 0.0390625 21V2C0.0390625 1.46957 0.249777 0.960859 0.624849 0.585787ZM24.0391 2L2.03906 2L2.03906 19.382L4.59185 18.1056C4.87338 17.9648 5.20475 17.9648 5.48628 18.1056L9.03906 19.882L12.5918 18.1056C12.8734 17.9648 13.2047 17.9648 13.4863 18.1056L17.0391 19.882L20.5918 18.1056C20.8734 17.9648 21.2047 17.9648 21.4863 18.1056L24.0391 19.382V2Z" fill="white"/>
              </svg>

              Pedidos
            </ButtonOrders>
          </> 
        }
        
        <ButtonLogout onClick={handleSignOut}>
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2891 11.75L27.5391 17M27.5391 17L22.2891 22.25M27.5391 17H13.5391M13.5391 28H6.53906C6.27385 28 6.01949 27.8946 5.83196 27.7071C5.64442 27.5196 5.53906 27.2652 5.53906 27V7C5.53906 6.73478 5.64442 6.48043 5.83196 6.29289C6.01949 6.10536 6.27385 6 6.53906 6H13.5391" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </ButtonLogout>

      </div>

    </Container>
  )
}