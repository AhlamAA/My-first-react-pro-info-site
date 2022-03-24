import twi from "../image/Twitter.png"
import insta from "../image/Instagram.png"
import git from "../image/GitHub.png"
import faceb from "../image/Facebook.png"

export default function SMedia(){
    return (
        <div className="social-media">
            <img src={twi}/>
            <img src={insta}/>
            <img src={git}/>
            <img src={faceb}/>   
        </div>
    )
}