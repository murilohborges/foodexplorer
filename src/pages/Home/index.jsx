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
            centeredSlides={false}
            spaceBetween={20}
            className="swiper-meals"
            loop={true}
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

          {
            desserts.map(plate => (
              <Plate
                key={String(plate.id)}
                data={plate}
                onClick={() => handleDetails(plate.id)}
              />
            ))
          }

        </Section>

        <Section title="Bebidas">
          
          {
            drinks.map(plate => (
              <Plate
                key={String(plate.id)}
                data={plate}
                onClick={() => handleDetails(plate.id)}
              />
            ))
          }

        </Section>


      </Main>
      
      <Footer/>
        
    </Container>
  )
}