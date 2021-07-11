import { GlobalStyle } from '../../styles/global';
import { Link } from 'react-router-dom'
import { Container, BoxContainer, Box, Title, GoHome } from './styled'


export default function SuccessLead() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <BoxContainer>
                    <Box>
                        <Title>Lead cadastrado com sucesso!</Title>
                    </Box>
                    <Box>
                    <GoHome>Volte para a home <Link to="/Home">clicando aqui!</Link></GoHome>
                    </Box>
                </BoxContainer>
            </Container>
        </>
    );
}