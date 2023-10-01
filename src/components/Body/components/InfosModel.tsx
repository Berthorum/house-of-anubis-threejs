import styled from "styled-components";
import logoSerie from "../../../assets/logoSerie.svg";

export default function infosModel() {
  const Wrapper = styled.div`
    font-family: "Tangerine", cursive;
    text-align: justify;
    overflow: auto;
    padding: 10px;
  `;
  const Title = styled.div`
    display: flex;
    align-items: center;
  `;
  return (
    <Wrapper>
      <Title>
        <img
          src={logoSerie}
          alt="Logo Serie"
          width={40}
          height={40}
        />
        <h2 style={{ fontSize: "2.5em" }}>The Moon and Sun Keys</h2>
      </Title>

      <p style={{ marginTop: "20px", fontSize: "2em" }}>
        House of Anubis is a mystery television series developed for Nickelodeon
        based on the Dutch–Belgian television series Het Huis Anubis. The series
        was created by Hans Bourlon and Gert Verhulst and premiered on
        Nickelodeon on 1 January 2011 in the United States and on 25 February
        2011 in the United Kingdom.
      </p>
    </Wrapper>
  );
}
