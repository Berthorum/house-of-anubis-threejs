import styled from 'styled-components';
import InfosModel from './components/InfosModel';
import Model from './components/Model';
import Menu from './components/Menu';

export default function body(){
  const Grid = styled.section`
    display: grid;
    gap: 10px;
    grid-template-columns: 30% 65% 1fr;
    margin-top: 30px;
    height: 300px;
    
    @media (max-width: 1024px){
      grid-template-columns: 40% 60%;
    }
  `;

  return (
    <Grid>
      <InfosModel/> 
      <Model/>
      <Menu/>
    </Grid>
  )
}