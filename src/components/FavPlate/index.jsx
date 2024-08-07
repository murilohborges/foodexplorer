import { Container, PlateImage, Info, ButtonRemove } from './styles';
import plateIcon from '../../assets/plateIcon.png';
import { useAuth } from "../../hooks/auth.jsx";

export function FavPlate({ data, ...rest }) {
  const avatarUrl = plateIcon;
  const { user } = useAuth();

  return (
    <Container >

        <PlateImage>
          <img src={avatarUrl} alt="Foto do prato"/>
        </PlateImage>

      <Info>
        <h1>Bolo de chocolate</h1>
        <ButtonRemove>Remover dos Favoritos</ButtonRemove>
      </Info>

    </Container>
  )
}