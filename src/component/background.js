import React from 'react';
import s from './backgrond.module.css';
import sample from './polina.mp4';
import backgrond_mobile from './background_mobile.jpg';
import {Link} from 'react-router-dom';
import Contact from './contact';



const Backgrond=()=>{
  return(
  <div>
    <Contact/>
      <div className={s.title}><h1>IGOR REDKA</h1>
      <Link to='/MyWorks'><button>My Works</button></Link>
      </div>
   <div className={s.backgrond_photo}>
   <img src={backgrond_mobile}/>
   <div className={s.back}>
   </div></div>   
  <video className={s.videoTag} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg"  playsinline autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video>
</div>
 );
}
export default Backgrond;