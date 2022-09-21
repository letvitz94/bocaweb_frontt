export const Lista = ({key,nome,usuario,descricao,data_inclusao, palavras_chave, odas}) => {
    return(
            <div className='listas' key={key}>
                <h1> Nome: {nome} </h1>
                <p> Usuário: {usuario} </p>
                <p> Descrição: {descricao} </p>
                <p> Data de inclusão: {data_inclusao} </p>
                <p> Palavras chave: {palavras_chave} </p>
            </div>
    )
    
    
}




