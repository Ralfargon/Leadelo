import { GlobalStyle } from '../../styles/global';
import { Button } from './styled'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import LeadTable from '../../components/LeadTable/LeadTable';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Home() {

  return (
    <>
      <GlobalStyle />

      <Grid container spacing={3} alignContent="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Typography variant="h3" >Painel de leads</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            <Link to="/Lead">
              <Button>Novo lead +</Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} >
          <Box display="flex" alignItems="center">
            <LeadTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}