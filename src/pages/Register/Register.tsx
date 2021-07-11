import { GlobalStyle } from '../../styles/global';
import { Container, BoxContainer, Box, Title } from './styled'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import styled from 'styled-components';
import usuariosController from "../../controllers/cadastros";


export const TextField = styled.input`
  color: black;  
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 2em;
  border: 2px solid gray;
  border-radius: 3px;
  `;

export const GoBack = styled.p`
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

export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const history = useHistory();
    const [alert, setAlert] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [messageEmail, setMessageEmail] = useState('');

    const emailRegex = /^\S+@\S+\.\S+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const validateEmail: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const email = event.target.value;
        if (emailRegex.test(email)) {
            setIsValidEmail(true);
            setMessageEmail('Seu email parace bom!');
            setEmail(event.target.value)
        } else {
            setIsValidEmail(false);
            setMessageEmail('Email inválido!');
        }
    };

    const validatePassword: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
        const password = event.target.value;
        if (passwordRegex.test(password)) {
            setIsValid(true);
            setMessage('Seu password parace bom!');
            setPassword(event.target.value)
        } else {
            setIsValid(false);
            setMessage('Preencha todos os campos e o Password deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter numérico, um caracter alfanumérico.');
        }
    };

    return (
        <>
            <GlobalStyle />
            <Container>
                <BoxContainer>
                    <Box>
                        <Title>Cadastro</Title>
                    </Box>
                    <Box>
                        <form action="/Success"
                            onSubmit={(evt) => {
                                evt.preventDefault()

                                if (email === "" || password === "")
                                    return setAlert(true);

                                if (password !== confirmpassword)
                                    return setAlert(true);

                                usuariosController.addUsuario({ email: email, password: password });

                                history.push({ pathname: "/Success" })
                                console.log("Login armazenado")
                            }}>
                            <Box>
                                <TextField placeholder="E-mail" onChange={validateEmail} />
                                <TextField placeholder="Password" onChange={validatePassword} />
                                <TextField placeholder="Confirm Password" onChange={(e) => setConfirmpassword(e.target.value)} />
                                <Button type="submit">Registrar</Button>
                            </Box>
                        </form>
                        <GoBack>Para cancelar e voltar <Link to="/">clique aqui!</Link></GoBack>
                        {alert && (
                            <Box>
                                <h3>Password e Confirm Password devem ser iguais!</h3>
                            </Box>)}
                        <div className={`message ${isValid ? 'success' : 'error'}`}>
                            {message}
                        </div>
                        <div className={`message ${isValidEmail ? 'success' : 'error'}`}>
                            {messageEmail}
                        </div>
                    </Box>
                </BoxContainer>
            </Container>
        </>
    );
}