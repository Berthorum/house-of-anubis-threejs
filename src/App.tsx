import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;
  return (
    <Wrapper>
      <Header />
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default App;
