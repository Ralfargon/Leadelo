import { GlobalStyle } from '../../styles/global';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom'
import { Button } from './styled'
import TextField from '@material-ui/core/TextField';
import { Header } from '../../components/Header/Header'
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import leadsController from "../../controllers/leads";


export default function Lead() {

    const [checked, setChecked] = useState({
        RPA: false,
        ProdutoDigital: false,
        Analytics: false,
        BPM: false,
    });

    const [checkedAll, setCheckedAll] = useState(false);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [alert, setAlert] = useState(false);
    console.log(nome, telefone, email)
    const history = useHistory();

    return (
        <>
            <GlobalStyle />
            <Grid container spacing={3} alignContent="center">
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <Typography variant="h3" >Cadastro de leads</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} direction="column" sm={6}>
                    <form
                        onSubmit={(evt) => {
                            evt.preventDefault()
                        }}>
                        <Box textAlign="center" >
                            <Grid item xs={12} sm={6} >
                                <TextField margin="normal" required id="outlined-required" label="Nome" variant="outlined"
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField margin="normal" required id="outlined-required2" label="Telefone" variant="outlined"
                                    onChange={(e) => setTelefone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField margin="normal" required id="outlined-required3" label="E-mail" variant="outlined"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <form
                        onSubmit={(evt) => {
                            evt.preventDefault()
                        }}
                    >
                        <Box display="flex" alignItems="center" paddingLeft="50px">
                            <Checkbox
                                checked={checkedAll}
                                onChange={(evt) => {
                                    setChecked({ RPA: evt.target.checked, ProdutoDigital: evt.target.checked, Analytics: evt.target.checked, BPM: evt.target.checked });
                                    setCheckedAll(evt.target.checked)
                                }}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                            <Typography variant="subtitle1" >Marcar/Desmarcar tudo</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={checked.RPA}
                                onChange={(evt) => setChecked({ ...checked, RPA: evt.target.checked })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                            <Typography variant="subtitle1" >RPA</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={checked.ProdutoDigital}
                                onChange={(evt) => setChecked({ ...checked, ProdutoDigital: evt.target.checked })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                            <Typography variant="subtitle1" >Produto Digital</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={checked.Analytics}
                                onChange={(evt) => setChecked({ ...checked, Analytics: evt.target.checked })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                            <Typography variant="subtitle1" >Analytics</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Checkbox
                                checked={checked.BPM}
                                onChange={(evt) => setChecked({ ...checked, BPM: evt.target.checked })}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                            <Typography variant="subtitle1" >BPM</Typography>
                        </Box>
                    </form>
                    <Button type="submit"
                        onClick={(evt) => {
                            evt.preventDefault()

                            if (nome === "" || telefone === "" || email === "" || (checked.RPA === false && checked.ProdutoDigital === false && checked.Analytics === false && checked.BPM === false ))
                                return setAlert(true);

                            leadsController.addLead({
                                info: checked,
                                nome: nome,
                                telefone: telefone,
                                email: email,
                                status: "potential"
                            });

                            history.push({ pathname: "/SuccessLead" })
                            console.log("Novo lead cadastrado")
                        }}
                    >Salvar</Button>
                    {alert && (
                    <Box>
                        <Typography variant="subtitle1" >Todos os campos são obrigatórios! Favor preencher.</Typography>
                    </Box>)}
                </Grid>
            </Grid>
        </>
    );
}