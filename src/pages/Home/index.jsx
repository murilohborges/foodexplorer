import { Container, Title, TitleImage, Main, FixedContent } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Plate } from "../../components/Plate/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { USER_ROLE } from '../../utils/roles.js';
import { useAuth } from "../../hooks/auth.jsx";

import { Swiper } from '../../components/SwiperContainer/index.jsx';
import { PanelButton } from "../../components/PanelButton/index.jsx";
import { RiOrderPlayFill } from "react-icons/ri";


export function Home() {
  const [varSearch, setVarSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const numberMealsCreated = meals.length;
  const numberDessertsCreated = desserts.length;
  const numberDrinksCreated = drinks.length;
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const cartUser = [];
  const { user } = useAuth();

  async function receivedSearch(search){
    setVarSearch(search);
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function receivedOrderToCart(order){
    const cartVerify = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
    if(cartVerify === null){
      cartUser.push(order);
      localStorage.setItem(`@foodexplorer:cartuser${user.id}`, JSON.stringify(cartUser));
    }else{
      const cartUser = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
      cartUser.push(order);
      localStorage.setItem(`@foodexplorer:cartuser${user.id}`, JSON.stringify(cartUser));
    }
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  useEffect(() => {
    async function fetchPlates(){
      const response = await api.get(`/plates?title=${varSearch}`);
      setMeals(response.data.filter((plate) => plate.category === "Refeição"))
      setDesserts(response.data.filter((plate) => plate.category === "Sobremesa"))
      setDrinks(response.data.filter((plate) => plate.category === "Bebida"))
    }
    fetchPlates();
  }, [varSearch, ]);

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
        <PanelButton/>
        

        <Title>
          <TitleImage/>

          <div className="description">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Title>

        <Main>
          
          <Section title="Refeições">
            
            <Swiper
              className="swiper-meals"
              indexLeftArrow="swiper-meals-left"
              indexRightArrow="swiper-meals-right"
              numberElements={numberMealsCreated}
            >
              {
                meals.map(plate => (
                  <Plate
                    receivedOrderToCart={receivedOrderToCart}
                    key={String(plate.id)}
                    data={plate}
                  />
                ))
              }
            </Swiper>

          </Section>

          <Section title="Sobremesas">
            <Swiper
              className="swiper-desserts"
              indexLeftArrow="swiper-desserts-left"
              indexRightArrow="swiper-desserts-right"
              numberElements={numberDessertsCreated}
            >

              {
                desserts.map(plate => (
                  <Plate
                    receivedOrderToCart={receivedOrderToCart}
                    key={String(plate.id)}
                    data={plate}
                  />
                ))
              }
            </Swiper>

          </Section>

          <Section title="Bebidas">
            <Swiper
              className="swiper-drinks"
              indexLeftArrow="swiper-drinks-left"
              indexRightArrow="swiper-drinks-right"
              numberElements={numberDrinksCreated}
            >
              {
                drinks.map(plate => (
                  <Plate
                    receivedOrderToCart={receivedOrderToCart}
                    key={String(plate.id)}
                    data={plate}
                  />
                ))
              }
            </Swiper>

          </Section>

        </Main>

        
      </FixedContent>      
      
      <Footer/>
        
    </Container>
  )
}