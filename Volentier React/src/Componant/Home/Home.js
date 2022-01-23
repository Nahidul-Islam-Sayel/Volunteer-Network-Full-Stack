import React, { useState } from 'react';
import { useEffect } from 'react';
import { Form , FormControl , Button } from 'react-bootstrap';

import Data from '../Data/Data.js'
import Load from './Load.js';
const Home = () => {
    const[Event,SetEvent]= useState([Data]);   
    return (
        <div className="container-fluid">
            <h4 className="mid">I GROW BY HELPING PEOPLE IN NEED</h4>
         
         
      <div className="row row-cols-1 row-cols-md-3 g-4">
       
       {     
           Data.map(value=><Load data={value}></Load>)
      }
      </div>
        </div>
    );
};

export default Home;