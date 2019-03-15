import React from 'react';
import { PhotoConsumer } from './context';
import Photo from './photo';
import s from './gallery.module.css';

const Gallery=()=>{
  return(
    <div className={s.all}>
    <div className={s.left}></div>
    <div className={s.global}>
   <PhotoConsumer>
     {value=>{
       return value.photos.map(item=>{
         return <div className={s.item}><Photo key={item.id} photo={item}/></div> 
       })
     }}
   </PhotoConsumer>
    </div>
    <div className={s.right}></div>
    </div>
    
    
    
    
 );
}
export default Gallery;