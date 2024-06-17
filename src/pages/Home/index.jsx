import { Container, Title, TitleImage, Main } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Plate } from "../../components/Plate/index.jsx";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { useNavigate } from "react-router-dom";
import { Swiper } from '../../components/SwiperContainer/index.jsx';


export function Home() {
  const [varSearch, setVarSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate();
  const numberMealsCreated = meals.length;
  const numberDessertsCreated = desserts.length;
  const numberDrinksCreated = drinks.length;


  async function receivedSearch(search){
    setVarSearch(search);
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

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  return(
    <Container>
      <Header receivedSearch={receivedSearch}/>

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
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={20}
            className="swiper-meals"
            loop={false}
            indexLeftArrow="swiper-meals-left"
            indexRightArrow="swiper-meals-right"
            numberElements={numberMealsCreated}
          >
            {
              meals.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                  onClick={() => handleDetails(plate.id)}
                />
              ))
            }
          </Swiper>

        </Section>

        <Section title="Sobremesas">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={20}
            className="swiper-desserts"
            loop={false}
            indexLeftArrow="swiper-desserts-left"
            indexRightArrow="swiper-desserts-right"
            numberElements={numberDessertsCreated}
          >

            {
              desserts.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                  onClick={() => handleDetails(plate.id)}
                />
              ))
            }
          </Swiper>

        </Section>

        <Section title="Bebidas">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            spaceBetween={20}
            className="swiper-drinks"
            loop={false}
            indexLeftArrow="swiper-drinks-left"
            indexRightArrow="swiper-drinks-right"
            numberElements={numberDrinksCreated}
          >
            {
              drinks.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                  onClick={() => handleDetails(plate.id)}
                />
              ))
            }
          </Swiper>

        </Section>


      </Main>
      
      <Footer/>
        
    </Container>
  )
}