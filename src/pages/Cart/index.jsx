import { Container, FixedContent, Main, BackButton, List, EmptyCart } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { CartPlate } from "../../components/CartPlate/index.jsx";
import { useAuth } from "../../hooks/auth.jsx";
import { useSnackbar } from '../../context/SnackbarContext.jsx';

export function Cart() {
  const [varSearch, setVarSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cartPlates, setCartPlates] = useState([]);
  const numbercart = cartPlates === null ? 0 : cartPlates.length;
  const { user } = useAuth();
  const { updateSnackbarMessage } = useSnackbar();

  async function receivedSearch(search){
    setVarSearch(search);
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  async function handleAdvanceToPayment(){
    if(cartPlates.length == 0){
      return updateSnackbarMessage("O carrinho está vazio. Adicione pratos para avançar para o pagamento!", "warning")
    }
    let itemsUser = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
    const response = await api.post("/stripe/create-checkout-session", { itemsUser });
    if(response.status !== 200) {
      return updateSnackbarMessage(error.response.data.message, "error");
    }
    try{
      updateSnackbarMessage("Carregando", "info")
      window.location = response.data.url
    }catch(error){
      updateSnackbarMessage(error.response.data.message, "error");
    }
  }

  useEffect(() => {
    setCartPlates(JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`)));
  }, []);

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
          <BackButton to="/">
            <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
            </svg>
            Voltar
          </BackButton>

          <h1>Carrinho</h1>

          <List $numbercart={numbercart}>
            <EmptyCart $numbercart={numbercart}>
              <svg width="86" height="104" viewBox="0 0 86 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0004 0.000624651C24.2095 0.000624651 26.0003 1.79147 26.0003 4.0006V24.0005C26.0003 26.2096 24.2095 28.0005 22.0004 28.0005C19.7912 28.0005 18.0004 26.2096 18.0004 24.0005V4.0006C18.0004 1.79147 19.7912 0.000624651 22.0004 0.000624651Z" fill="#7C7C8A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.0004 42.0004C24.2095 42.0004 26.0003 43.7912 26.0003 46.0003V100C26.0003 102.209 24.2095 104 22.0004 104C19.7912 104 18.0004 102.209 18.0004 100V46.0003C18.0004 43.7912 19.7912 42.0004 22.0004 42.0004Z" fill="#7C7C8A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.65803 0.0550481C10.8371 0.418226 12.3092 2.47912 11.946 4.65819L8.00388 28.3109C8.08364 31.9114 9.54868 35.3477 12.1009 37.8999C14.7264 40.5254 18.2873 42.0004 22.0004 42.0004C25.7134 42.0004 29.2743 40.5254 31.8998 37.8999C34.452 35.3477 35.9171 31.9114 35.9968 28.3109L32.0547 4.65819C31.6915 2.47912 33.1636 0.418226 35.3427 0.0550481C37.5217 -0.30813 39.5826 1.16394 39.9458 3.34301L43.9458 27.3429C43.982 27.5602 44.0002 27.7801 44.0002 28.0005C44.0002 33.8352 41.6824 39.4309 37.5566 43.5567C33.4308 47.6825 27.8351 50.0003 22.0004 50.0003C16.1656 50.0003 10.5699 47.6825 6.4441 43.5567C2.31832 39.4309 0.000488281 33.8352 0.000488281 28.0005C0.000488281 27.7801 0.0186914 27.5602 0.0549122 27.3429L4.05489 3.34301C4.41807 1.16394 6.47896 -0.30813 8.65803 0.0550481Z" fill="#7C7C8A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M84.2948 0.72435C85.3635 1.47293 86 2.69576 86 4.0006V100C86 102.209 84.2091 104 82 104C79.7909 104 78 102.209 78 100V72.0002H54.0002C52.8651 72.0002 51.7835 71.518 51.0249 70.6737C50.2663 69.8295 49.902 68.7027 50.023 67.5741L54.0002 68.0002C50.023 67.5741 50.0228 67.5752 50.023 67.5741L50.0247 67.558L50.0287 67.5217L50.0435 67.3893C50.0564 67.2749 50.0756 67.1088 50.1013 66.8941C50.1527 66.4647 50.2302 65.8407 50.3363 65.0477C50.5485 63.4622 50.8755 61.1983 51.3371 58.4602C52.2588 52.9936 53.7249 45.5926 55.9016 37.91C58.0699 30.2573 60.9889 22.1595 64.874 15.3855C68.7082 8.70031 73.8167 2.72011 80.633 0.241449C81.8593 -0.204471 83.226 -0.0242337 84.2948 0.72435ZM58.5616 64.0002H78V11.2033C75.8233 13.235 73.7542 15.982 71.8136 19.3656C68.3863 25.3415 65.6803 32.7436 63.5986 40.0908C61.5254 47.4081 60.1165 54.507 59.2257 59.7903C58.9584 61.3758 58.7384 62.7937 58.5616 64.0002Z" fill="#7C7C8A"/>
              </svg>

              <h1>Ainda não há pratos no carrinho...</h1>
            </EmptyCart>

            {
              cartPlates &&
              cartPlates.map(plate => (
                <CartPlate
                  key={String(plate.order_id)}
                  data={plate}
                />
              ))
            }

          </List>
          
          <div className="wrapper-next-button">
            <Button title={'Ir para o pagamento'} onClick={handleAdvanceToPayment}/>
          </div>

        </Main>

      </FixedContent>
      
      <Footer/>
        
    </Container>
  )
}