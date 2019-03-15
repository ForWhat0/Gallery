import React from "react";
import s from "./menu.module.css";
import {NavLink} from "react-router-dom";
import instagram from './instagram.png';
import facebook from './facebook.png';
import email from './email.png';

    const Menu=()=>{
     
     let MenuLink=[
        {name:instagram,link:'https://www.instagram.com/igor_riff/'},
        {name:facebook,link:'https://www.facebook.com/igor.riffmaster'},
        {name:email,link:'mailto:redkaigor@gmail.com'},
        
    ];
     
     let LinkElement=MenuLink.map(item=><a href={item.link}><img src={item.name}/></a>);
    
     return (
         <React.Fragment>
         <li className={s.name}>I G O R R E D K A</li>  
         <input type="checkbox" id={s.nav} className={s.hidden} /> 
         <label for={s.nav} className={s.nav_btn}>
                  
                        <i></i>
                        <i></i>
                        <i></i>
                  </label>
        <nav className={s.nav_wrapper}>
         <ul className={s.menu} >
         
         <li><NavLink  exact={true} to='/MyWorks'className={s.links}  activeClassName={s.active}>GALLERY</NavLink></li>
         <li><NavLink  exact={true} to='/MyWorks/ABOUT'className={s.links}  activeClassName={s.active}>ABOUT/CONTACT</NavLink></li>
          <div className={s.icon}>
         {LinkElement}
         </div>
         </ul>
         </nav>
         
         </React.Fragment> );
 }
 
 export default Menu;