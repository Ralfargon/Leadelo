import { GlobalStyle } from '../../styles/global';
import { Link } from 'react-router-dom'
import { Container, BoxContainer, Box, Title, GoLogin } from './styled'

export default function Success() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <BoxContainer>
                    <Box>
                        <Title>Cadastro realizado com sucesso!</Title>
                    </Box>
                    <Box>
                    <GoLogin>Volte para a página de login <Link to="/">clicando aqui!</Link></GoLogin>
                    </Box>
                </BoxContainer>
            </Container>
        </>
    );
}