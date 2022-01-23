import React,{useState,useEffect} from 'react';
import Load from './Load';
import './Load.css';
const Admin = () => {
    const[user,setUser]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/Admin')
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            setUser(res)
        })
    },[])
    return (
        <div>
        <section class="product-section clearfix">
        <div>
   
  </div>
      
  <table class="table">
        <thead>
        <tr>
        
          <th scope="col">email</th>
          <th scope="col">Organize</th>
          
        </tr>
      </thead>
      <tbody id="tbody">
      {
           user.map(res=>
            <Load pd={res}></Load>
            )
        }
      </tbody>
      </table>
     
    </section>
    </div>
     
    );
};

export default Admin;