import React from 'react';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import './Load.css'
const load = (props) => {
const{name,email,Organize,phone,_id}=props.pd;
console.log(_id)
let alpha = false;
const deleteitem=()=>{
   alpha=true;
    fetch(`http://localhost:5000/delete/${_id}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(res=>{
    
    }
     )
     document.getElementsByClassName({_id}).style.display = "block"
  }


    ;
  
    return (
    

       

          <tr className={_id}>
  
            <td>{email}</td>
    <td>{Organize}</td>
            <td><button type="button" class="btn btn-primary" onClick={deleteitem}>Delete</button></td>
          </tr>
  
   
      
 
     
    );
};

export default load;