import { Container, PlateImage, Info, ButtonRemove } from './styles';
import plateIcon from '../../assets/plateIcon.png';
import { useAuth } from "../../hooks/auth.jsx";
import { api } from '../../services/api.js';
import { useNavigate } from "react-router-dom";
import { useSnackbar } from '../../context/SnackbarContext.jsx';

export function CartPlate({ data, ...rest }) {
  const avatarUrl = data.plate_avatar ? `${api.defaults.baseURL}/files/${data.plate_avatar}` : plateIcon;
  const navigate = useNavigate();
  const { user } = useAuth();
  const { updateSnackbarMessage } = useSnackbar();

  function handleDetails(id){
    const plateId = `${data.plate_id}`;
    id = plateId;
    navigate(`/details/${id}`);
  }

  async function handleRemove(){
    const order_id = data.order_id;
    const cart = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
    const cartFiltered = cart.filter((plate) => plate.order_id != order_id)
    localStorage.setItem(`@foodexplorer:cartuser${user.id}`, JSON.stringify(cartFiltered));
    navigate('/');
    updateSnackbarMessage("Prato removido do carrinho", "success")
  }

  return (
    <Container >

        <PlateImage onClick={handleDetails}>
          <img src={avatarUrl} alt="Foto do prato"/>
        </PlateImage>

      <Info>
        <h1 onClick={handleDetails}>{data.plate_title}</h1>
        <p>Quantidade: {data.plate_amount}</p>
        <ButtonRemove onClick={handleRemove}>Remover do Carrinho</ButtonRemove>
      </Info>

    </Container>
  )
}