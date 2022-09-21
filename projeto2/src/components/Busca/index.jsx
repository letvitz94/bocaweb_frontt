export const Busca = ({name,type,value,placeholder,onChange}) => {
    return(

        <div className = 'busca'>

          <input
            name={name}
            type = {type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}

          />
          

          
        </div>
    )
    
    
}