import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  height: 150px;
  width: 150px;
  margin: 1em;

  .rotate {
    transform: rotateY(180deg);
  }
`;

export const CardFlip = styled.div`
  height: 100%;
  width: 100%;

  transform-style: preserve-3d;
  transition: all 1s ease-in-out;


`;

export const Front = styled.div`
  background:#eee;
  backface-visibility: hidden;
  border-radius: 6px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
`;

export const Back = styled.div`
  backface-visibility: hidden;
  background: #eaeaed;
  color: #0087cc;
  line-height: 150px;
  text-align: center;
  transform: rotateY(180deg);
`;

