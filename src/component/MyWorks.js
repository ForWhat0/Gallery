import React from 'react';
import s from './my_works.module.css';
import Menu from './menu';
import Content from './content';
import { PhotoProvider } from './context';
import Modal from './modal';




const MyWorks=()=>{
  return(
    <PhotoProvider>
  <div className={s.global}>
  <Modal/>
     <div className={s.menu}><Menu/></div>
     
     <div className={s.content}><Content/></div>
  </div>
  </PhotoProvider>
 );
}
export default MyWorks;