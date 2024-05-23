export default function CadastroS(){
    return(
        <section className="container-cadastro">
        <div className="cadastro-div">
            <h1>Login</h1>
            <div className="cadastro-div2">
                <label>Usuário:</label>
                <input type="text" name="" id="usuId" />
                <label>Senha:</label>
                <input type="password" name="" id="senId" />
                <button onClick={Salvar}>Login</button>
                <a href="/Cadastro">Criar Conta</a>
            </div>
        </div>
        </section>
    )
}

function Salvar(){
    let user = document.getElementById("usuId").value
    let pass = document.getElementById("senId").value
    localStorage.setItem(user,pass)
}