import React from 'react';

function Input({handleChange, textValue}) {
    return (
        <form>
            <div className="form-group">          
            <input 
                value={textValue}
                onChange={(e) => {
                    console.log(e.target.value);
                    handleChange(e.target.value);
                }}
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Type some stuff" />         
            </div>        
        </form>    
    );
}

export default Input;