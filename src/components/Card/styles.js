import styled, { keyframes, css } from 'styled-components';


const rotate = keyframes`
  from{
    transform:  rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`;

export const Container = styled.div.attrs(props => ({}))`
  height: 130px;
  width: 130px;
  margin: 1em;

  transform-style: preserve-3d;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  background: #fff;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }


  ${
    props => props.flip
    ? css `
      background: #000;
      animation: ${rotate} 1s linear infinite;`
    : css `
      background: red;
     `
  }

`;



export const Front = styled.div`
  backface-visibility: hidden;
  height: 100%;
  width: 100%;

  border-radius: 6px;
  position: absolute;
  overflow: hidden;
`;

export const Back = styled.div`
  backface-visibility: hidden;
  height: 100%;
  width: 100%;

  color: #0087cc;
  line-height: 150px;
  text-align: center;
  transform: rotateY(180deg);

  position: absolute;
  overflow: hidden;

`;