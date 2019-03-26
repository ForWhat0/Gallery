import React from "react";
import foto from './1.jpg';
import s from './about.module.css';


const About=()=>{
    return(
        <div className={s.global}>
        <div className={s.content}>
        <div className={s.foto} src>
        <img  src={foto}/>
        </div>
           <div className={s.text}>
           <h3>Photographer</h3>
            <p>"I want my photo to be uniquely beautiful without trying too much."</p>
            <p>The photographic foundation is rooted in capricious shades and beyond. Using creative design and cinematic motifs, I create a landscape of dreams for my theme.</p>
            <footer className={s.footer}>
                <div className={s.info}><strong>Let's tals</strong><nav className={s.nav}>Email:<a href='mailto:redkaigor@gmail.com'>redkaigor@gmail.com</a></nav></div>
                <div className={s.info_2}><strong>Social media</strong><nav className={s.nav}>Instagram:<a href='https://www.instagram.com/igor_riff/'>@igor_riff</a></nav><nav className={s.nav}>Facebook:<a href='https://www.facebook.com/igor.riffmaster'>@IgorRedka</a></nav></div>
            </footer>
          </div>
          </div>
            
        </div>
    );
}
 
 export default About;