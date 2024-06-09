export default function CadastroBlogS(){
    return(
        <form className="form-blog">
            <fieldset>
                <label>Titulo: <input type="text" id="Titulo"/></label> 
                     
                <label className="input-img" >Imagem:<label>Upload<input type="file" accept="image/png, image/jpeg" id="Imagem"/></label> </label>
                <label>Texto:</label>
                <textarea></textarea>
                <div>
                    <a href="/Admin"><button>cancelar</button></a>
                    <button> enviar<input type="submit" /></button>
                </div>
            </fieldset>
        </form>
    )
}