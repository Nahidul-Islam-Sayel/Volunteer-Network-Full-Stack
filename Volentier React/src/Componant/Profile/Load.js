import React from 'react';
import { Redirect } from 'react-router-dom';
import './Profile.css'
const load = (props) => {

    console.log(props)
   const{name,phone,email,Organize,date,_id}=props.pd;
   const deleteitem=(event)=>{
     fetch(`http://localhost:5000/delete/${_id}`,{
       method: 'DELETE'
     })
     .then(res=>res.json())
     .then(res=>{
       if(res==true){
         window.location.reload();
       }
     }
      )
   }
    return (
    
      <div class="row-4">
   
      <div class="write">
    
          <img src="https://cdn.pixabay.com/photo/2017/10/31/20/57/hands-2906458_960_720.jpg"/>
          <h2>{Organize}</h2>
          <p>From : {date}</p>
      
          <button type="button" class="btn btn-primary" onClick={deleteitem}>Cencle</button>
      </div>
    
      
     </div>
      
 
     
    );
};

export default load;