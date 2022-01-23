import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Reg.css'
const Reg = () => {
    const [loggedInUser, setLoggedInUser , Type , setType , Name , setName , Email , setEmail , Date,setDate] = useContext(UserContext);
  
    return (
        <div>
            <h5 class="name">Hello Mr,{Name}</h5>
                <form className="form-style-9" action="http://localhost:5000/add" method="post">
                <img src="https://i.imgur.com/jvXfGwT.png" alt="" srcset=""/>
                <h5>Register As a Volunteer</h5>
                <ul>
                <li>
                    <input type="text" name="name" className="field-style field-split align-left" placeholder="Full Name" value={Name} />
                    <input type="email" name="email" className="field-style field-split align-right" placeholder="Username or Email" value={Email}/>
                
                </li>
                <li>
                    <input type="text" name="phone" className="field-style field-split align-left" placeholder="Phone" />
                    <input type="date" name="date" className="field-style field-split align-right" placeholder="date" />
                </li>
                <li>
                <input type="text" name="Description" className="field-style field-full align-none" placeholder="Description" />
                </li>
                <br/>
                <li>
                <input type="text" name="Organize" className="field-style field-full align-none" placeholder="Organize" value={Type}/>
                </li>
                <li>
                <input type="submit" value="Submit" />
                </li>
                </ul>
                </form>
        
        </div>
    );
};

export default Reg;