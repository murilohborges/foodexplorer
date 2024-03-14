import { Container, BackButton, Main, Form, Avatar, SaveButton, Row } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Textarea } from "../../components/Textarea/index.jsx";
import { NoteItem } from "../../components/NoteItem/index.jsx";
import { Link } from "react-router-dom";

export function New() {


  return(
    <Container>
      <Header/>

      <Main>
        <BackButton to="/">
          <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
          </svg>
          Voltar
        </BackButton>

        <Form>

          <h1>Novo prato</h1>

          <Row id="row-one">
            <div className="wrapper-input">
              <label htmlFor="avatar">
                Imagem do prato
              </label>

              <Avatar>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z" fill="white"/>
                </svg>

                <p>Selecione a imagem</p>

                <input 
                  id="avatar"
                  type="file"
                />
              </Avatar>
            </div>

            <div className="wrapper-input">
              <label htmlFor="name">
                Nome
              </label>
              <input type="text" id="name" placeholder="Ex.: Salada Cesar"/>
            </div>

            <div className="wrapper-input">
              <label htmlFor="type">
                Categoria
              </label>

              <select id="type">
                <option value="Refeição">Refeição</option>
                <option value="Prato principal">Prato principal</option>
                <option value="Sobremesa">Sobremesa</option>
              </select>
            </div>
          </Row>

          <Row className="row-two">
            <div className="wrapper-input">
              <label htmlFor="tags">
                Tags
              </label>
              <div className="tags">
                <NoteItem 
                  isNew={false}
                  value="Pão Naan"
                />
                
                <NoteItem 
                  isNew
                  placeholder="Novo link"
                />
                
              </div>  
            </div>

            <div className="wrapper-input">
              <label htmlFor="price">
                Preço
              </label>
              <input type="number" id="price" placeholder="R$ 00,00" />
            </div>
          </Row>

          <Row className="row-three">
            <div className="wrapper-input">
              <label htmlFor="description">
                Descrição
              </label>
              <Textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."/>
            </div>
          </Row>

          <Row className="row-four">
            <SaveButton>Salvar alterações</SaveButton>
          </Row>


        </Form>

      </Main>

      
      <Footer/>
        
    </Container>
  )
}