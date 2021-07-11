import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: 100vh;
  `;

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color:#D1D2DC;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 5em;
  padding-bottom: 5em;
  border-radius: 5%;
  `;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

export const Title = styled.h1`
  font-size: 3em;  
  color: black;  
  padding-top: 1em;
`;

export const SubTitle = styled.h2`
  font-size: 2em;  
  color: black;  
`;

export const Button = styled.button`
  color: white;  
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em 2em;
  border: 2px solid black;
  border-radius: 3px;
  background-color: black;
  &:hover {
    color: gray;
  }
`;