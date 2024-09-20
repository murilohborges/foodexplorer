import { Container } from "./styles";
import { useAuth } from "../../hooks/auth.jsx";
import { USER_ROLE } from '../../utils/roles.js';

export function OrderItem (){
  const { user } = useAuth();

  return (
    <Container>
      <head>
        <div className="order-code">000004</div>
        <div className="order-status">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8)" fill="#AB222E"/>
          </svg>
          Pedente
        </div>
        <div className="order-date">20/05 às 18h00</div>
      </head>
      <div className="order-description">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</div>

      <div className="select-order-status">
        {
          [USER_ROLE.ADMIN].includes(user.role) && 
          <>
            <select id="status-order">
              <option value="pending">
                Pendente
              </option>
              <option value="preparing">
                Preparando
              </option>
              <option value="delivered">
                Entregue
              </option>
            </select>
          </>
        } 
      </div>
    </Container>
  );
}