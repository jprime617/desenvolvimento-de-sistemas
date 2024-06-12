export default function EditBlog(){
    return(
<>  
<div className="editblog">

  <h1 className="cadastrar">Cadastrar Conteúdo do Blog</h1><br/><br/>

  <div className="edicao">
  <input type="text" placeholder='Título do Artigo' className="tituloartigo"/><br/><br/>
  <button>Fazer Upload de Imagens</button><br/><br/>
  <h3>Conteúdo do Artigo</h3>
  <input type="text"className="conteudo"/><br/><br/>
  <button className="cancelar">Cancelar</button> <button className="salvar">Salvar</button>
  </div></div>
  
  
</>
   )
}