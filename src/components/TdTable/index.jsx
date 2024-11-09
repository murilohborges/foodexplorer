import { Container } from "./styles";

export function TdTable ({ children, width, ...rest }){
  return (
    <Container style={{ width: width }}>
      {children}
    </Container>
  );
}