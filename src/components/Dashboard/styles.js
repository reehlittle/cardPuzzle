import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
`;

export const RightBox = styled.div`
  width:20%;
`;
export const Game = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 55%;
  height: 100%;
  background: transparent;
  margin: auto;
  border-radius: 4px;
  margin-top: 40px;
`;

export const Moviments =  styled.div`
  width:25%;
  color: #fff;
  position: relative;
  margin: 0 auto;
  text-align: center;
  margin-top: 3em;
  padding: 1.5em;

  .box {
    display: grid;
    grid-template-rows: 0.5fr 1fr 2fr 1fr;
    max-height: 500px;
  }



  .score-card {
    grid-row: 3;
    width: 50%;
    height: 70%;
    justify-self: center;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
  }

  .box-l .score-card {
    border: 3px solid #0f85d1;
  }

  .score {
    grid-row: 3;
    font-size: 5rem;
    margin-top: 0.1em;
    margin-bottom: 0.8em;
  }

`;

