import { Container, ButtonHeader } from "./styles.js";
import { useNavigate } from "react-router-dom";

export function PanelButton(){
  const navigation = useNavigate();

  function handleNewPlate(){
    navigation("/new");
  }

  return (
    <Container>
      <ButtonHeader>Meus Favoritos</ButtonHeader>

      <ButtonHeader onClick={handleNewPlate}>Novo prato</ButtonHeader>
    </Container>
  )
}