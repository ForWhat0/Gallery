import React from 'react';
import {Link} from 'react-router-dom';
import {PhotoConsumer} from './context';
import s from './modal.module.css';
import prev from './prev.png';
import next from './next.png';
class Modal extends React.Component{
    render(){
        return(
            
                <PhotoConsumer>
                    {(value)=>{
                        
                        const {modalOpen,closeModal,number,nextItem,prevItem}=value;
                        const {id,img}=value.modalPhoto;
                        const all_photo = value.photos.length;
                        
                        
                    
                    if(!modalOpen){
                        return null;
                    }
                    else {
                        return(
                            <div  className={s.global}>
                            <div className={s.items}>
                            <img src={img} />
                            <div className={s.next}>
                            <button onClick={()=>{ nextItem(id)}}
                             disabled={number === all_photo - 1}>
                             <img src={next}/>
                             </button>  
                            </div>
                            <div  className={s.prev}>
                            <button onClick={()=>{ prevItem(id)}}
                            disabled={number === 0}>
                            <img src={prev}/>
                            </button>   
                            </div>

                            <strong className={s.close} onClick={()=>{closeModal()}} >X</strong>
                            <div className={s.number_photo}>{`${number + 1}/${all_photo}`}</div>
                                            
                            </div>
                            </div>
                             
                        );
                    }    
                    }}
                </PhotoConsumer>
            
        );
    }
}
export default Modal;