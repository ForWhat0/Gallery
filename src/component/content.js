import React from "react";
import Gallery from "./gallery";
import {Route} from "react-router-dom";
import About from "./about";
import Admin from "./Admin";

const Content=()=>{
    return(
        <div>
            <Route exact path="/MyWorks" component={Gallery}/>
            <Route exact path="/MyWorks/ABOUT" component={About}/>
            <Route exact path="/MyWorks/ADMIN/IGORRIFF" component={Admin}/>
            </div>
    );
}
 
 export default Content;