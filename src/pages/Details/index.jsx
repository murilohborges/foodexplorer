import { Container, Main, PlateImage, BackButton, PlateInfo, TextInfo, ControlNumberPlates } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { PanelButton } from "../../components/PanelButton/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth.jsx";
import { api } from "../../services/api.js";
import { USER_ROLE } from '../../utils/roles.js'

import plateIcon from '../../assets/plateIcon.png'

export function Details() {
  const [data, setData] = useState(null);
  const [avatar, setAvatar] = useState(plateIcon);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const avatarUrl = avatar ? `${api.defaults.baseURL}/files/${avatar}` : plateIcon;
  const { user } = useAuth();
  const [numberOrders, setNumberOrders] = useState(Number('0'));

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
    return
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  function handleEdit(){
    navigate(`/edit/${params.id}`);
  }

  function handleIncrease(){
    setNumberOrders(numberOrders + 1);
  }

  function handleDecrease(){
    if(numberOrders <= 0){
      setNumberOrders(0);
      return
    } else {
      setNumberOrders(numberOrders - 1);
    }
  }

  async function handleFavPlate() {
    try{
      const response = await api.post(`/favourites/${params.id}`);
      alert("Prato favoritado com sucesso!");
      navigate('/')
    }catch(e){
      alert("Não foi possível realizar esta ação, verifique se o prato já não foi favoritado pelo usuário.");
    }
  }

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

      {
        [USER_ROLE.ADMIN].includes(user.role) && 
        <>
          <PanelButton/>
        </> 
      }

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

              {
                [USER_ROLE.ADMIN].includes(user.role) && 
                <>
                  <div className="wrapper-buttons">
                    <Button className="button-fav" onClick={handleFavPlate} title="Favoritar prato"/>
                    <Button className="button-edit" onClick={handleEdit} title="Editar prato"/>
                  </div>
                </> 
              }

              {
                [USER_ROLE.CUSTOMER].includes(user.role) && 
                <>
                  <ControlNumberPlates>
                    <button className='decreasse-button' onClick={handleDecrease}>
                      <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.335786 0 0.75 0H17.25C17.6642 0 18 0.447715 18 1C18 1.55228 17.6642 2 17.25 2H0.75C0.335786 2 0 1.55228 0 1Z" fill="white"/>
                      </svg>
                    </button>
                    {numberOrders}
                    <button className='increase-button' onClick={handleIncrease}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 9C0 8.58579 0.335786 8.25 0.75 8.25H17.25C17.6642 8.25 18 8.58579 18 9C18 9.41421 17.6642 9.75 17.25 9.75H0.75C0.335786 9.75 0 9.41421 0 9Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C9.41421 0 9.75 0.335786 9.75 0.75V17.25C9.75 17.6642 9.41421 18 9 18C8.58579 18 8.25 17.6642 8.25 17.25V0.75C8.25 0.335786 8.58579 0 9 0Z" fill="white"/>
                      </svg>
                    </button>

                    <button className='include-button'>
                      <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72549 5.47185C3.72549 5.09848 4.02816 4.79581 4.40152 4.79581H13.1899C13.5633 4.79581 13.866 5.09848 13.866 5.47185C13.866 5.84521 13.5633 6.14788 13.1899 6.14788H4.40152C4.02816 6.14788 3.72549 5.84521 3.72549 5.47185Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72549 8.17597C3.72549 7.80261 4.02816 7.49994 4.40152 7.49994H13.1899C13.5633 7.49994 13.866 7.80261 13.866 8.17597C13.866 8.54933 13.5633 8.852 13.1899 8.852H4.40152C4.02816 8.852 3.72549 8.54933 3.72549 8.17597Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.403334 0.459608C0.656894 0.206048 1.0008 0.0635986 1.35939 0.0635986H16.2321C16.5907 0.0635986 16.9346 0.206048 17.1881 0.459608C17.4417 0.71317 17.5841 1.05707 17.5841 1.41566V14.2602C17.5841 14.4945 17.4628 14.7121 17.2635 14.8353C17.0642 14.9585 16.8153 14.9697 16.6058 14.8649L14.204 13.664L11.8022 14.8649C11.6119 14.9601 11.3878 14.9601 11.1975 14.8649L8.79572 13.664L6.39393 14.8649C6.20361 14.9601 5.97959 14.9601 5.78927 14.8649L3.38748 13.664L0.985685 14.8649C0.776124 14.9697 0.52725 14.9585 0.327945 14.8353C0.12864 14.7121 0.00732422 14.4945 0.00732422 14.2602V1.41566C0.00732422 1.05707 0.149774 0.713169 0.403334 0.459608ZM16.2321 1.41566L1.35939 1.41566L1.35939 13.1664L3.08515 12.3035C3.27547 12.2084 3.49949 12.2084 3.68981 12.3035L6.0916 13.5044L8.49339 12.3035C8.68372 12.2084 8.90773 12.2084 9.09805 12.3035L11.4998 13.5044L13.9016 12.3035C14.092 12.2084 14.316 12.2084 14.5063 12.3035L16.2321 13.1664V1.41566Z" fill="white"/>
                      </svg>
                      pedir ∙ R$ 25,00
                    </button>
                
                  </ControlNumberPlates>
                </> 
              }
            

            </TextInfo>

  
            
          </PlateInfo>
        }

        


      </Main>
      
      <Footer/>
        
    </Container>
  )
}