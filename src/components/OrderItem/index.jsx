import { Container } from "./styles";
import { useAuth } from "../../hooks/auth.jsx";
import { USER_ROLE } from '../../utils/roles.js';

export function OrderItem (data, ...rest){
  const { user } = useAuth();
  const orderData = data.data
  const orderId = `${orderData.id}`
  const orderDate = `${orderData.created_at}`
  const orderStatus = `${orderData.status}`
  const orderDetails = `${orderData.details}`

  function translateOrderStatus(status){
    switch(status) {
      case 'pending':
        return 'Pendente'
      case 'preparing':
        return 'Preparando'
      case 'delivered':
        return 'Entregue'
      default:
        return 'Pendente'
    }
  }

  function colorOrderStatus(status){
    switch(status) {
      case 'pending':
        return "#AB222E"
      case 'preparing':
        return '#FBA94C'
      case 'delivered':
        return '#04D361'
      default:
        return '#AB222E'
    }
  }

  return (
    <Container>
      <head>
        <div className="order-code">{orderId}</div>
        <div className="order-status">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" transform="matrix(1 0 0 -1 0 8)" fill={colorOrderStatus(orderStatus)}/>
          </svg>
          {translateOrderStatus(orderStatus)}
        </div>
        <div className="order-date">{orderDate}</div>
      </head>
      <div className="order-description">{orderDetails}</div>

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