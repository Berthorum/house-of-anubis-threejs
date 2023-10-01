import styled from "styled-components";

export default function Header() {
  const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    font-family: "Tangerine", cursive;
    color: #ffffff;
  `;
  

  const Wrapper = styled.header`
    padding: 1em;
  `;

  return (
    <Wrapper>
      <Title>House of Anubis</Title>      
    </Wrapper>
  );
}
