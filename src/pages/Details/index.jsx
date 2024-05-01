import { Container, Main, PlateImage, BackButton, PlateInfo, TextInfo } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";

import plateIcon from '../../assets/plateIcon.png'

export function Details() {
  const [data, setData] = useState(null);
  const [avatar, setAvatar] = useState(plateIcon);
  const [varSearch, setVarSearch] = useState("");
  const avatarUrl = avatar ? `${api.defaults.baseURL}/files/${avatar}` : plateIcon;

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function fetchPlate(){
      const response = await api.get(`/plates/${params.id}`);
      setData(response.data);
      setAvatar(response.data[0].avatar)
      
    }

    fetchPlate();
  }, [])

  async function receivedSearch(search){
    setVarSearch(search);
  }

  function handleEdit(){
    navigate(`/edit/${params.id}`);
  }

  return(
    <Container>
      <Header receivedSearch={receivedSearch}/>

      <Main>

        <BackButton onClick={handleBack}>
          <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
          </svg>
          Voltar
        </BackButton>

        {
          data &&

          <PlateInfo>
          
            <PlateImage>
              <img src={avatarUrl} alt="Foto do prato"/>
            </PlateImage>

            <TextInfo>
              <h1>{data[0].title}</h1>

              <p>{data[0].description}</p>

              {
                data.ingredients &&
                <div className="wrapper-tags">
                  {
                    data.ingredients.map(ingredient => (
                      <Tag
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))
                  } 
                  
                </div>


              }

            <Button className="button-edit" onClick={handleEdit} title="Editar prato"/>

            </TextInfo>

  
            
          </PlateInfo>
        }

        


      </Main>
      
      <Footer/>
        
    </Container>
  )
}