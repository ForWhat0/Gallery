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
const Photo_details = {
    id: '',
    img: "",
  };
  const PhotoContext=React.createContext();

class PhotoProvider extends React.Component{
    state={
        photos:[],
        admin_open:false,
        photo_details:Photo_details,
        modalOpen:false,
        modalPhoto:Photo_details,
    }

   
   componentWillMount(){
       const item = this.state.photos;
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
    openModal=(id)=>{
        const photo=this.getItem(id);
        this.setState(()=>{
            return {modalPhoto:photo,modalOpen:true}})  
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
                }}>
            {this.props.children}
            </PhotoContext.Provider>
          );
    }
}
const PhotoConsumer=PhotoContext.Consumer;

export {PhotoProvider,PhotoConsumer};