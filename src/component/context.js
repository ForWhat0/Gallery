import React from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVc-CF35I-4Nx24EGud-yMVjg42YcaiII",
  authDomain: "gallery-27ee5.firebaseapp.com",
  databaseURL: "https://gallery-27ee5.firebaseio.com",
  projectId: "gallery-27ee5",
  storageBucket: "gallery-27ee5.appspot.com",
  messagingSenderId: "596474064900"
};
firebase.initializeApp(config);
const storage = firebase.storage();
var gallery = firebase.database().ref("photos");
export {storage,gallery, firebase as default}

  const PhotoContext=React.createContext();

class PhotoProvider extends React.Component{
    state={
        photos:[],
        admin_open:false,
        modalOpen:false,
        modalPhoto:'',
        number:''
    }

   
    componentDidMount(){
       const item = [...this.state.photos];
       gallery.on('child_added', snap => {
           item.push({
               id:snap.key,
               img:snap.val().img,
               
           })
      
           this.setState({
               photos: item
           })
          
           
       })
   }
   
   getItem=(id)=>{
        const photo=this.state.photos.find(item=>item.id===id);
        return photo;

    }

    nextItem=(id)=>{
        const getIndex = this.state.photos.findIndex(item=>item.id===id);
        const nextIndex = getIndex+1;    
        const item = 0;
        const next = this.state.photos[item+nextIndex].id;
        const photo=this.getItem(next);
        this.setState(()=>{
            return {modalPhoto:photo,number:nextIndex}})  
        
    }
    prevItem=(id)=>{
        const getIndex = this.state.photos.findIndex(item=>item.id===id);
        const prevIndex = getIndex-1;
        const item = 0;
        const prev = this.state.photos[item+prevIndex].id;
        const photo=this.getItem(prev);
        this.setState(()=>{
            return {modalPhoto:photo,number:prevIndex}})  
        
    }
    openModal=(id)=>{
        const getIndex = this.state.photos.findIndex(item=>item.id===id);
        const photo=this.getItem(id);
        this.setState(()=>{
            return {modalPhoto:photo,modalOpen:true,number:getIndex}})  
        }
        closeModal=()=>{
            this.setState(()=>{
                return {modalOpen:false}})
        } 

    render(){
        return(
            <PhotoContext.Provider value={{
                ...this.state,
                openModal:this.openModal,
                 closeModal:this.closeModal,
                 nextItem:this.nextItem,
                 prevItem:this.prevItem
                }}>
            {this.props.children}
            </PhotoContext.Provider>
          );
    }
}
const PhotoConsumer=PhotoContext.Consumer;

export {PhotoProvider,PhotoConsumer};