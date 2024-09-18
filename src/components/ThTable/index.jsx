import { Container } from "./styles";

export function ThTable ({ children, ...rest }){
  return (
    <Container>
      {children}
    </Container>
  );
}