import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/header/Header";
import Launches from "./components/launches/Launches";
import styled from "@emotion/styled";

const queryClient = new QueryClient();

const AppStyled = styled.div`
  @media(min-width: 768px) {
    padding: 0 50px;
  }
`;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppStyled>
        <Header />
        <Launches />
      </AppStyled>
    </QueryClientProvider>
  );
}
