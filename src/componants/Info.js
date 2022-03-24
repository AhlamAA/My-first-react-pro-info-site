import image from "../image/a.jpg"
import imagel from "../image/linkedin.png"
import imageE from "../image/e.png"

export default function Info(){
    return (
        <>
           <img src={image} className="girl"/>
           <h1>Ahlam Alsaedi</h1>
           <h4 className="roll">Full-Stack Developer</h4>
           <a href="#">
                <small>
                www.ahlam-alsaedi.com
                </small>
           </a>
           <div className="buttons">
                <button><img src={imageE} className="mail-icon"/>Email</button>
                <button><img src={imagel} className="linkedin-icon"/>LinkedIn</button>
           </div>
        </>
    )
}