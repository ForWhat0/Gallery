import React from 'react';
import {Link} from 'react-router-dom';
import {PhotoConsumer} from './context';
import s from './modal.module.css';
class Modal extends React.Component{
    render(){
        return(
            
                <PhotoConsumer>
                    {(value)=>{
                        
                        const {modalOpen,closeModal}=value;
                        const {id,img}=value.modalPhoto;
                    
                    if(!modalOpen){
                        return null;
                    }
                    else {
                        return(
                            <div onClick={()=>{value.closeModal()}} className={s.global}>
                            <div className={s.items}>
                            <img src={img} />
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