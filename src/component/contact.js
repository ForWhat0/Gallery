import React from 'react';
import s from './contact.module.css';
import instagram from './instagram.png';
import facebook from './facebook.png';
import email from './email.png';



const Contact=()=>{
  let MenuLink=[
    {name:instagram,link:'https://www.instagram.com/igor_riff/'},
    {name:facebook,link:'https://www.facebook.com/igor.riffmaster'},
    {name:email,link:'mailto:redkaigor@gmail.com'},
    
];
let LinkElement=MenuLink.map(item=><a href={item.link}><img src={item.name}/></a>);
  return(
  <div className={s.contact}>
      {LinkElement}
</div>
 );
}
export default Contact;