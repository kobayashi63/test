
import React from 'react';
import Image from './sabasaba.jpg';

export default function Picture(){
       return(
       <div align="center">  
              <img 
              src={Image}
              alt="sabasaba"     
              width="50%"
              />
       </div>
       );
}