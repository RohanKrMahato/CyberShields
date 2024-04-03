import styles from "./Card.css";
import harshit from "./WhatsApp Image 2024-03-25 at 12.53.28.jpeg"
import rohan from "./1678802514689.png"

function Card() {
    return (
      <div className="Headcardcss">
        <div className="content">
        <div className="hbox"></div>
          <div className="imgbox"><img className="img" src={rohan}></img></div>
          <div className="Name">Paramjeet</div>
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-github"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
  
export default Card;