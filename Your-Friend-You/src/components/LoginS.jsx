import { useNavigate } from "react-router-dom"

export default function () {

    const navigate = useNavigate()
    function login() {
        const nome = document.getElementById('usuId').value
        const senha = document.getElementById('senId').value
        if(nome == "admin" && senha == "admin"){
            navigate('/Admin')
        }else{
            alert('Alguma coisa esta errada.')
        }
    }

    return(
        <section className="container-login">
        <div className="login-div">
            <h1>Login</h1>
            <form className="login-div2" onSubmit={() => login()}>
                <label>Usuário:</label>
                <input type="text" name="" id="usuId" />
                <label>Senha:</label>
                <input type="password" name="" id="senId" />
                <button type="submit">Login</button>
                <a href="/Cadastro">Criar Conta</a>
            </form>
        </div>
        </section>
    )
}

