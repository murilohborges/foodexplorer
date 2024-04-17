import { Container, Title, TitleImage, Main, WrapperPlates } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Plate } from "../../components/Plate/index.jsx";
import plateIcon from '../../assets/plateIcon.png'


export function Home() {


  return(
    <Container>
      <Header/>

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
            <Plate
              data={{
                title: 'Salada Ravanello',
                price: '49,97'
              }}
            />

            {/* <Plate
              data={{
                title: 'Salada Ravanello',
                price: '49,97'
              }}
            /> */}
          </WrapperPlates>

        </Section>

        <Section title="Pratos principais">
          
          <WrapperPlates>
            <Plate
              data={{
                title: 'Prugna Pie',
                price: '79,97'
              }}
            />

            {/* <Plate
              data={{
                title: 'Prugna Pie',
                price: '79,97'
              }}
            /> */}
          </WrapperPlates>

        </Section>

        <Section title="Sobremesas">
          
          <WrapperPlates>
            <Plate
              data={{
                title: 'Prugna Pie',
                price: '79,97'
              }}
            />

            {/* <Plate
              data={{
                title: 'Prugna Pie',
                price: '79,97'
              }}
            /> */}
          </WrapperPlates>

        </Section>


      </Main>
      
      <Footer/>
        
    </Container>
  )
}