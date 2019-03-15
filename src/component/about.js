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
            <p>"I aim for my photography to be uniquely beautiful without trying too hard."</p>
            <p>Her photographic foundation is rooted with moody undertones and otherworldly terrains. Using creative set design and cinematic motifs, Lauren forges a dream landscape for her subject matter. She is a visual creator with a strong base on human emotion and expressive storytelling.</p>
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