import { Container } from "./styles";

export function TdTable ({ children, ...rest }){
  return (
    <Container>
      {children}
    </Container>
  );
}