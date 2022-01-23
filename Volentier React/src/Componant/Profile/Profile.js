import React, { useState,useContext } from 'react';
import { useEffect } from 'react';
import Load from './Load'
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Profile = () => {
    const [loggedInUser, setLoggedInUser,setEmail] = useContext(UserContext);

        console.log(loggedInUser.email)
        localStorage.setItem('myData', loggedInUser.email);
    const[data,setDate]=useState([]);
    useEffect(()=>{
        console.log(' i am hitted')
        fetch('http://localhost:5000/Profile?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(res=>setDate(res))
        
    },[])
    return (
       
        <div>
            <section class="product-section clearfix">
            <div>
        <h2 class="name">You Also Join for</h2>
      </div>
          
           {   
               data.map(res=>
                <Load pd={res}></Load>
                )
            }
        </section>
        </div>
    );
};

export default Profile;