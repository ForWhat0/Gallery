import React from "react";
import Form from "./form";
import Upload from "./upload";
import s from './admin.module.css';


class Admin extends React.Component{
  state={
    login:'',
    password:'',
    admin:false
  }
 
 gettingAdmin = async (event) =>  {
   event.preventDefault();
   var login=event.target.login.value;
   var password=event.target.password.value;
   
 if(login==='1'&& password==='2'){
     this.setState({
         admin:true
     })
 }

  }

  render(){
    const  {admin}=this.state;
    return( 
       <div className={s.global}>
     
     {admin?(<span disabled ><Upload/></span>):
       <Form   Admin_method={this.gettingAdmin}/>}
        
      </div>
        
    );
  }

}
export default Admin;