import React  from 'react'
import observerMenu from '../utils/observer'


let SingleChar = (props) => {



    return (

        
        
        <div  onClick={(event) =>{ observerMenu.executeObserver('obz', {fullData: props.params});  
             observerMenu.executeObserver('obz2', {urlD: props.params.url}); }} className='par-char'>
            <img className='char-img' alt='char' src={props.params.url}  />
           

        
        </div>
        
    )
}

 
export default SingleChar