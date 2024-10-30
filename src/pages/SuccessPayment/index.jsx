import { Container, FixedContent, Main} from "./styles.js";
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
    const intervalId = setInterval(async () => {
      try {
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

          // Limpa o carrinho do localStorage
          localStorage.removeItem(`@foodexplorer:cartuser${user.id}`);

          // Interrompe o polling ao obter a confirmação do pagamento
          clearInterval(intervalId);

          //Redirecionamento para o histórico de pagamentos
          setTimeout(()=> {
            navigate('/orders')
          }, 10000)
        }
      } catch (err) {
        console.error('Erro ao obter o status do pagamento:', err);
        setError('Não foi possível verificar o pagamento.');
        clearInterval(intervalId);
        navigate('/')
      } finally {
        setLoading(false);
      }
    });

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

          <h1>Pedido Realizado com sucesso!</h1>
          <p>Aguarde para ser redirecionado para o histórico de pagamentos...</p>

        </Main>

      </FixedContent>

      <Footer/>
        
    </Container>
  )
}