import React from 'react';
import s from './backgrond.module.css';
import {Link} from 'react-router-dom';
import Contact from './contact';



const Backgrond=()=>{
  return(
  <div className={s.body}>
    <Contact/>
      <div className={s.title}><h1>IGOR REDKA</h1>
      <Link to='/MyWorks'><button>My Works</button></Link>
      </div>
      <ul className={s.cb_slideshow}>
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
            <li><span>Image 04</span></li>
            <li><span>Image 05</span></li>
            <li><span>Image 06</span></li>
        </ul>  
  
    
</div>
 );
}
export default Backgrond;