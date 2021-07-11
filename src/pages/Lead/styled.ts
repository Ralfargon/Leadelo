import styled from 'styled-components';


export const TextField = styled.input`
  color: black;  
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 2em;
  border: 2px solid gray;
  border-radius: 3px;
  `;

export const Register = styled.p`
  color: black;  
  font-family: 'Roboto', sans-serif;
  font-size: 0.85em;
  margin: 0.3em;
  padding-top: 0.5em;
`;

export const Button = styled.button`
  color: white;  
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 2em;
  border: 2px solid black;
  border-radius: 3px;
  background-color: black;
  &:hover {
    color: gray;
  }
`;

