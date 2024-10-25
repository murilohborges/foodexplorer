import { Container, FixedContent, Main, BackButton } from "./styles.js";
import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";
import { SideMenu } from "../../components/SideMenu/index.jsx";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";

export function SuccessPayment() {
  const [varSearch, setVarSearch] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  async function receivedSearch(search){
    setVarSearch(search);
  }

  async function receivedMenuIsOpen(isOpen){
    setMenuIsOpen(isOpen);
  }

  async function onCloseMenu(){
    setMenuIsOpen(false);
  }

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const responseCreat = await api.post('/webhook');
        const response = await api.get('/webhook', { withCredentials: true });
        
        // Verifica se o status é 'ok'
        if (response.data.status === 'ok') {
          setStatus('Pagamento realizado com sucesso!');
          
          //Coletar dados do pedido do carrinho e limpa-lo em seguida
          const detailsOrder = JSON.parse(localStorage.getItem(`@foodexplorer:cartuser${user.id}`));
          
          //Envio dos dados do pedido para a tabela de pedidos
          const responseOrderCreate = await api.post('/orders', {
            details: detailsOrder
          })
          //Redirecionamento para o histórico de pagamentos
          setTimeout(()=> {
            navigate('/orders')
          }, 10000)
        } else {
          throw new Error('Ocorreu um erro ao verificar o pagamento.');
        }
      } catch (err) {
        console.error('Erro ao obter o status do pagamento:', err);
        setError('Não foi possível verificar o pagamento.');
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentStatus();
  }, []);

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

      <FixedContent>
        <Main>
          <BackButton to="/orders">
            <svg width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7071 1.14568C12.0976 1.5362 12.0976 2.16937 11.7071 2.55989L2.41421 11.8528L11.7071 21.1457C12.0976 21.5362 12.0976 22.1694 11.7071 22.5599C11.3166 22.9504 10.6834 22.9504 10.2929 22.5599L0.292893 12.5599C-0.0976311 12.1694 -0.0976311 11.5362 0.292893 11.1457L10.2929 1.14568C10.6834 0.755152 11.3166 0.755152 11.7071 1.14568Z" fill="white"/>
            </svg>
            Ir para histórico de pedidos
          </BackButton>

          <h1>Pedido Realizado com sucesso!</h1>
          <p>Aguarde para ser redirecionado para o histórico de pagamentos ou clique no botão acima...</p>

        </Main>

      </FixedContent>

      <Footer/>
        
    </Container>
  )
}