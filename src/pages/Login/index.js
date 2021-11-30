import { BoxLogin, Container } from "./styles";
import Btn from "../../components/Btn/Btn";

import Logo from "../../assets/Logo.png";

function Login() {
    return (
        <Container>
            <img src={Logo} alt="Fifi Filmes" class="img-fluid mb-5" />
            <BoxLogin>
                <div class="mb-4">
                    <label for="exampleFormControlInput1" class="form-label mb-4">
                        Digite seu nome de usuário
                    </label>
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control rounded-pill"
                            id="nomeUsuario"
                            name="nomeUsuario"
                            placeholder="Usuário"
                            aria-label="Usuário"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <label for="exampleFormControlInput1" class="form-label mb-4">
                        Digite sua senha
                    </label>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control rounded-pill"
                            id="senhaUsuario"
                            name="senhaUsuario"
                            placeholder="Senha"
                            aria-label="Senha"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <Btn></Btn>
                </div>
            </BoxLogin>
        </Container>
    )
}

export default Login