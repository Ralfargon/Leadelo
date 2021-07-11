import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import usuariosController from "../src/controllers/cadastros";

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

const Title = styled.h1`
  font-size: 64px;  
  color: black;  
  padding-bottom: 0.5em;
  padding-top: 1em;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  `;

const BoxContainer = styled.div`
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    background-color: black;
    height: 100vh;
  `;

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const [errors, setErrors] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Container>
        <BoxContainer>
          <Box>
            <Title>Leadelo</Title>
          </Box>
          <Box>
            <form action="/Home"
              onSubmit={(evt) => {
                evt.preventDefault();

                const userslist = usuariosController.getUsuario()
                const found = userslist.find(element => element.email === email && element.password === password)
                if (found === undefined) {
                  return setErrors(true);
                }

                console.log(found)

                history.push({ pathname: "/Home" })
                console.log("Login armazenado")
              }}>
              <Box>
                <TextField type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <TextField type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Login</Button>
              </Box>
            </form>
            <Register >Não tem login? Cadastre-se <Link to="/Registrar">aqui!</Link></Register>
          </Box>

          {errors && <div>Login inválido!</div>}
        </BoxContainer>
      </Container>
    </>
  );
}