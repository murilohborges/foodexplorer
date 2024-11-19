import { Container } from "./styles.js";

export function LoadingWindow(isLoading, ...rest) {
  return(
    <Container $isLoading={isLoading.isLoading}>
      <h1>Carregando...</h1>
    </Container>
  )
}