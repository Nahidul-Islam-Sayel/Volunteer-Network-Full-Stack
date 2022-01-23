import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const Load = (props) => {
    const{img,text}=props.data;
    const [loggedInUser, setLoggedInUser , Type , setType , Name , setName , Email , setEmail] = useContext(UserContext);
  const handlesubmit=()=>{
    
    setType(text)
  }
    return (

      <Link to="/reg">  <div className="col" >
        <div className="card">
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" id="xyz">{text}</h5>
          <button type="button" class="btn btn-primary" onClick={handlesubmit}>Agree</button>
        </div>
      </div>
      </div>
      </Link>
    );
};

export default Load;