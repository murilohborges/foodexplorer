import { Container } from "./styles";

export function ThTable ({ children, width, ...rest }){
  return (
    <Container style={{ width: width }}>
      {children}
    </Container>
  );
}