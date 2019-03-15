import React from 'react';
import { PhotoConsumer } from './context';
import s from './photo.module.css';
import loader from './loading.gif'
export default class Photo extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { imageStatus: <div className={s.loader}><img  src={loader}/></div> };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: null });
  }

  
    render(){
        const {id,img}=this.props.photo;
        return(
        
            
        <PhotoConsumer>
       {value=>(
         
          <div className={s.gallery}>
          <img src={img} onLoad={this.handleImageLoaded.bind(this)}
           className={s.photo}  onClick={()=>{value.openModal(id)}} />
           {this.state.imageStatus}
          </div>
          
        
     
          
          
          
         
        
         
         
       )}
         </PhotoConsumer>
        
            
         );
    }
}

