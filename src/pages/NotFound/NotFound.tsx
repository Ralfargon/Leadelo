import { Link } from 'react-router-dom'
import { Title } from './styled'


export default function Home() {
    return (
        <>
            <Title>Error 404 - Page Not Found :/ </Title>
            <Title>Don't worry! go to the homepage <Link to="/">Here</Link> </Title>
        </>
    );
}