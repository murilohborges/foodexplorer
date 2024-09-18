import { Container } from "./styles";

export function TrTable ({ children, ...rest }){
  return (
    <Container>
      {children}
    </Container>
  );
}