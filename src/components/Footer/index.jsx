import { Container } from "./styles.js";

export function Footer() {

  return(
    <Container>

      <div className="title-footer">
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.76367 0.667969L19.29 5.16797V14.168L9.76367 18.668L0.237392 14.168V5.16797L9.76367 0.667969Z" fill="#4D585E"/>
        </svg>                    
        <h2>food explorer</h2>
      </div>
      
      <p>© 2023 - Todos os direitos reservados.</p>
        
    </Container>
  )
}