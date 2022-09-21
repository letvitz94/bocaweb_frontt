import logobocaweb from '../../logobocaweb.png';
export const Cabecalho = () => {

    return(
        <div className='cabecalho'>
            <header>

                <div className="logo">		
                  <img  src={logobocaweb} alt="logo do bocaweb" width="250"/>
                </div>     

                <div className="nomedosite"> 

                 <h2> BOCA WEB FRONT </h2> 

                </div>
            </header>
        </div>

    
        
       
    )
    
    
}