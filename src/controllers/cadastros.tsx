
export type usuario = {
    email: string;
    password: string;
  };


const LOCALSTORAGE_CADASTRO = "@Leadleo/CadastroUsuario";

const usuariosController = {
  getUsuario(): usuario[] {
    const localstorageUsuarios = localStorage.getItem(LOCALSTORAGE_CADASTRO);
    if (localstorageUsuarios === null) {
      return [];
    } else {
      return JSON.parse(localstorageUsuarios);
    }
  },


   addUsuario(user: usuario) {
     const existingUsurarios = this.getUsuario();

     existingUsurarios.push(user);
     localStorage.setItem(LOCALSTORAGE_CADASTRO, JSON.stringify(existingUsurarios));
   },
}

export default usuariosController;