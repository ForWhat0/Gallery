import React from "react";
import {storage,gallery} from './context';
import { error } from "util";
import s from './admin.module.css';


class  Upload extends React.Component{
    constructor(props){
        super(props);
    
    this.state = {
        image:null,
        url:'',
        progress:0
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
}
    handleChange=e=>{
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(()=>({image}));
        }
    }

    handleUpload =()=>{
        const {image} = this.state;
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on('state_changed',(snapshot)=>{

            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setState({progress})
        
        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            storage.ref('image').child(image.name).getDownloadURL().then(url=>{
                gallery.push().set({'img':url})
                   
            })
        })
    }

    render(){
    return(
        <div className={s.form}>
        <h1>Hello, Igor</h1>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>Upload</button>
        <progress value={this.state.progress} max='100'/>
        </div>
    );
}}
export default Upload;