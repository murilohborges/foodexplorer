import { Container, PlateImage, Info, ButtonRemove } from './styles';
import plateIcon from '../../assets/plateIcon.png';
import { api } from '../../services/api.js';
import { useNavigate } from "react-router-dom";

export function FavPlate({ data, ...rest }) {
  const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : plateIcon;
  const PlateTitle = `${data.title}`;
  const PlateId = `${data.id}`;
  const navigate = useNavigate();

  function handleDetails(id){
    const plateId = `${data.id}`;
    id = plateId;
    navigate(`/details/${id}`);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if(confirm) {
      await api.delete(`/favourites/${PlateId}`);
      navigate("/");
    }
  }

  return (
    <Container >

        <PlateImage onClick={handleDetails}>
          <img src={avatarUrl} alt="Foto do prato"/>
        </PlateImage>

      <Info>
        <h1 onClick={handleDetails}>{PlateTitle}</h1>
        <ButtonRemove onClick={handleRemove}>Remover dos Favoritos</ButtonRemove>
      </Info>

    </Container>
  )
}