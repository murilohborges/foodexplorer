import { Container, Title, TitleImage, Main, WrapperPlates } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Plate } from "../../components/Plate/index.jsx";
import plateIcon from '../../assets/plateIcon.png';
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";


export function Home() {
  const [varSearch, setVarSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [mainPlates, setMainPlates] = useState([]);
  const [desserts, setDesserts] = useState([]);

  async function receivedSearch(search){
    setVarSearch(search);
  }
  

  useEffect(() => {
    async function fetchPlates(){
      const response = await api.get(`/plates?title=${varSearch}`);
      setMeals(response.data.filter((plate) => plate.category === "Refeição"))
      setMainPlates(response.data.filter((plate) => plate.category === "Prato principal"))
      setDesserts(response.data.filter((plate) => plate.category === "Sobremesa"))
    }

    fetchPlates();
  }, [varSearch]);

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
          
          <WrapperPlates>
            {
              meals.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                />
              ))
            }
            
          </WrapperPlates>

        </Section>

        <Section title="Pratos principais">
          
          <WrapperPlates>
            {
              mainPlates.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                />
              ))
            }
          </WrapperPlates>

        </Section>

        <Section title="Sobremesas">
          
          <WrapperPlates>
            {
              desserts.map(plate => (
                <Plate
                  key={String(plate.id)}
                  data={plate}
                />
              ))
            }
          </WrapperPlates>

        </Section>


      </Main>
      
      <Footer/>
        
    </Container>
  )
}