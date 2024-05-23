export default function () {
    return(
        <section className="container-login">
        <div className="login-div">
            <h1>Login</h1>
            <div className="login-div2">
                <label>Usuário:</label>
                <input type="text" name="" id="usuId" />
                <label>Senha:</label>
                <input type="password" name="" id="senId" />
                <button onClick={Salvar}>Login</button>
            </div>
        </div>
        </section>
    )
}

function Salvar(){
    const usuario = document.getElementById("usuId").value
    const senha = document.getElementById("senId").value

    localStorage.setItem(usuario, senha)
}